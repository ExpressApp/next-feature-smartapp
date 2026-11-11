import * as SDK from '@expressms/smartapp-sdk'
import { FileDownloadTypeResponse, STATUS, SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import {
  describeDownloadError,
  getProgressFileId,
  parseDownloadProgress,
  buildMissingFile,
} from './file-download.helpers'
import { DownloadFileItem, DownloadFilesResponse, FileDownloadProgressEvent } from './file-download.types'

const FILES_UPLOAD_TIMEOUT = 120000

export class FileDownloadStore {
  rootStore: RootStore
  files: DownloadFileItem[]
  isFilesPreparing: boolean
  isDownloadingAll: boolean
  isProgressVisible: boolean
  activeFileIds: string[]
  completedFileIds: string[]
  progressByFileId: Record<string, number>
  lastResponse: object | null

  private stopAllRequested: boolean
  private cancelledFileIds: string[]
  private warnedUnparsedProgress: boolean
  private callback: (event: FileDownloadProgressEvent) => void

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.files = []
    this.isFilesPreparing = false
    this.isDownloadingAll = false
    this.isProgressVisible = false
    this.activeFileIds = []
    this.completedFileIds = []
    this.progressByFileId = {}
    this.lastResponse = null
    this.stopAllRequested = false
    this.cancelledFileIds = []
    this.warnedUnparsedProgress = false
    this.callback = this.progressCallback.bind(this)
  }

  get existingFiles(): DownloadFileItem[] {
    return this.files.filter(item => item.exists)
  }

  get totalBytes(): number {
    return this.existingFiles.reduce((sum, item) => sum + item.size, 0)
  }

  get loadedBytes(): number {
    return this.existingFiles.reduce((sum, item) => sum + Math.min(this.loadedBytesOf(item), item.size), 0)
  }

  get overallProgress(): number {
    if (!this.totalBytes) return 0

    return Math.min(100, Math.round((this.loadedBytes / this.totalBytes) * 100))
  }

  get isDownloading(): boolean {
    return this.activeFileIds.length > 0
  }

  private fileIdOf(item: DownloadFileItem): string {
    return item.file?.fileId || item.key
  }

  loadedBytesOf(item: DownloadFileItem): number {
    return this.progressByFileId[this.fileIdOf(item)] || 0
  }

  isFileActive(item: DownloadFileItem): boolean {
    return this.activeFileIds.includes(this.fileIdOf(item))
  }

  isFileCompleted(item: DownloadFileItem): boolean {
    return this.completedFileIds.includes(this.fileIdOf(item))
  }

  fileProgressOf(item: DownloadFileItem): number {
    if (!item.size) return 0

    return Math.min(100, Math.round((this.loadedBytesOf(item) / item.size) * 100))
  }

  async prepareFiles(): Promise<void> {
    try {
      runInAction(() => {
        this.isFilesPreparing = true
      })

      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'download_files',
        params: {},
        timeout: FILES_UPLOAD_TIMEOUT,
      })) as DownloadFilesResponse | undefined

      if (!response) {
        this.rootStore.toastStore.showToast('Не удалось получить список файлов: нет соединения с клиентом')
        return
      }

      if (response.payload?.status === STATUS.ERROR || !response.payload?.result) {
        const error = response.payload?.errors?.[0]
        const reason = error?.reason || 'неизвестная ошибка'
        const code = error?.id ? ` (${error.id})` : ''

        this.rootStore.toastStore.showToast(`Не удалось получить список файлов: ${reason}${code}`)
        return
      }

      runInAction(() => {
        this.lastResponse = response.payload.result || null
        this.files = response.payload.result?.files || []
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Не удалось получить список файлов: ${e?.message || e}`)
    } finally {
      runInAction(() => {
        this.isFilesPreparing = false
      })
    }
  }

  async subscribeProgress(): Promise<void> {
    try {
      await SDK.subscribeClientEvents({
        eventType: SubscriptionEventType.FILE_DOWNLOAD_PROGRESS,
        callback: this.callback,
      })

      console.log('Subscribed file_download_progress')
    } catch (e) {
      this.rootStore.toastStore.showToast(`Не удалось подписаться на прогресс скачивания: ${e?.message || e}`)
    }
  }

  async unsubscribeProgress(): Promise<void> {
    try {
      await SDK.unsubscribeClientEvents({
        eventType: SubscriptionEventType.FILE_DOWNLOAD_PROGRESS,
        callback: this.callback,
      })

      console.log('Unsubscribed file_download_progress')
    } catch (e) {
      console.log('Error unsubscribing file_download_progress', e)
    }
  }

  async downloadFile(item: DownloadFileItem): Promise<void> {
    if (this.isFileActive(item)) {
      await this.stopFile(item)
      return
    }

    const fileId = this.fileIdOf(item)
    this.clearCancelFlag(fileId)

    const errorCode = await this.startDownload(item)

    if (this.clearCancelFlag(fileId)) return

    if (errorCode) {
      this.rootStore.toastStore.showToast(`Ошибка скачивания «${item.name}»: ${describeDownloadError(errorCode)}`)
      return
    }

    if (item.exists) {
      this.rootStore.toastStore.showToast(`Файл «${item.name}» скачан`)
    }
  }

  async stopFile(item: DownloadFileItem): Promise<void> {
    const fileId = this.fileIdOf(item)
    if (!this.cancelledFileIds.includes(fileId)) {
      runInAction(() => {
        this.cancelledFileIds = this.cancelledFileIds.concat(fileId)
      })
    }

    // "Download all" queue must not continue with the next file.
    if (this.isDownloadingAll) this.stopAllRequested = true

    await this.sendStopRequest(fileId)
    this.unmarkActive(fileId)
    this.rootStore.toastStore.showToast(`Скачивание «${item.name}» остановлено`)
  }

  async downloadRandomFile(): Promise<void> {
    const file = buildMissingFile()

    await this.downloadFile(file)
  }

  async downloadAll(): Promise<void> {
    if (this.isDownloadingAll) return

    // A single file may be downloading right now: it is a part of the queue too.
    if (this.isDownloading) await this.abortDownloads()

    const queue = this.existingFiles
    if (!queue.length) return

    this.stopAllRequested = false

    runInAction(() => {
      this.isDownloadingAll = true
      this.isProgressVisible = true
      this.progressByFileId = {}
      this.completedFileIds = []
    })

    let failedFile: DownloadFileItem | null = null
    let failedErrorCode: string | null = null

    try {
      for (const item of queue) {
        if (this.stopAllRequested) break

        const errorCode = await this.startDownload(item)

        if (this.stopAllRequested) break

        if (errorCode) {
          failedFile = item
          failedErrorCode = errorCode
          break
        }

        this.markCompleted(item)
      }
    } finally {
      const wasStopped = this.stopAllRequested

      runInAction(() => {
        this.isDownloadingAll = false
        this.stopAllRequested = false
        this.isProgressVisible = !wasStopped
      })
    }

    if (failedFile) {
      this.rootStore.toastStore.showToast(
        `Ошибка скачивания «${failedFile.name}»: ${describeDownloadError(failedErrorCode)}`
      )
      return
    }

    if (this.completedFileIds.length === queue.length) {
      this.rootStore.toastStore.showToast(`Скачано файлов: ${queue.length}`)
    }
  }

  async stopAll(): Promise<void> {
    if (!this.isDownloadingAll && !this.isDownloading) return

    this.stopAllRequested = true

    const activeIds = this.activeFileIds.slice()
    await Promise.all(activeIds.map(fileId => this.sendStopRequest(fileId)))

    runInAction(() => {
      this.activeFileIds = []
      this.progressByFileId = {}
      this.isProgressVisible = false
    })

    this.rootStore.toastStore.showToast('Скачивание остановлено')
  }

  async abortDownloads(): Promise<void> {
    this.stopAllRequested = true

    // Flags are set before requests: the aborted `fileDownloadStart` promise
    // stops with an error and its result must not be reported.
    const activeIds = this.activeFileIds.slice()

    runInAction(() => {
      this.cancelledFileIds = this.cancelledFileIds.concat(activeIds)
    })

    await Promise.all(activeIds.map(fileId => this.sendStopRequest(fileId, true)))

    runInAction(() => {
      this.activeFileIds = []
      this.progressByFileId = {}
      this.isProgressVisible = false
      this.isDownloadingAll = false
      this.stopAllRequested = false
    })
  }

  private progressCallback(event: FileDownloadProgressEvent): void {
    const progressFileId = getProgressFileId(event)
    if (!progressFileId) return

    const item = this.files.find(candidate => this.fileIdOf(candidate) === progressFileId)
    const progress = parseDownloadProgress(event, item?.size)

    if (!progress) {
      if (!this.warnedUnparsedProgress) {
        this.warnedUnparsedProgress = true
        console.warn('Unknown file_download_progress payload', event.payload)
      }

      return
    }

    const currentBytes = this.progressByFileId[progress.fileId] || 0
    if (progress.loadedBytes <= currentBytes) return

    runInAction(() => {
      this.progressByFileId = {
        ...this.progressByFileId,
        [progress.fileId]: progress.loadedBytes,
      }
    })
  }

  private async startDownload(item: DownloadFileItem): Promise<string | null> {
    const fileId = this.fileIdOf(item)
    this.markActive(fileId)

    try {
      const response = (await SDK.fileDownloadStart(item.file)) as FileDownloadTypeResponse

      if (!response || response.payload?.status === STATUS.ERROR) {
        return response?.payload?.errorCode || 'error'
      }

      return null
    } catch (e) {
      return typeof e === 'string' ? e : e?.message || 'error'
    } finally {
      this.unmarkActive(fileId)
    }
  }

  private async sendStopRequest(fileId: string, silent = false): Promise<void> {
    try {
      const response = (await SDK.fileDownloadStop({ fileId })) as FileDownloadTypeResponse

      if (silent) return

      if (response?.payload?.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(
          `Не удалось остановить скачивание: ${describeDownloadError(response.payload.errorCode)}`
        )
      }
    } catch (e) {
      if (silent) return

      this.rootStore.toastStore.showToast(`Не удалось остановить скачивание: ${e?.message || e}`)
    }
  }

  private markActive(fileId: string): void {
    if (this.activeFileIds.includes(fileId)) return

    runInAction(() => {
      this.activeFileIds = this.activeFileIds.concat(fileId)
      // Progress of the previous attempt is not relevant anymore.
      this.progressByFileId = { ...this.progressByFileId, [fileId]: 0 }
      this.completedFileIds = this.completedFileIds.filter(completedId => completedId !== fileId)
    })
  }

  private unmarkActive(fileId: string): void {
    runInAction(() => {
      this.activeFileIds = this.activeFileIds.filter(activeFileId => activeFileId !== fileId)
    })
  }

  private markCompleted(item: DownloadFileItem): void {
    const fileId = this.fileIdOf(item)

    runInAction(() => {
      this.progressByFileId = { ...this.progressByFileId, [fileId]: item.size }

      if (!this.completedFileIds.includes(fileId)) {
        this.completedFileIds = this.completedFileIds.concat(fileId)
      }
    })
  }

  private clearCancelFlag(fileId: string): boolean {
    const wasCancelled = this.cancelledFileIds.includes(fileId)
    if (!wasCancelled) return false

    runInAction(() => {
      this.cancelledFileIds = this.cancelledFileIds.filter(cancelledFileId => cancelledFileId !== fileId)
    })

    return true
  }
}
