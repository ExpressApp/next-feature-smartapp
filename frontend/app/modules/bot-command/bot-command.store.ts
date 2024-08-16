import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { FileData, FileTextResponse, UploadFileResponse, UploadFilesResponse } from './bot-command.types'

export class BotCommandStore {
  rootStore: RootStore
  response: object | null
  files: FileData[]
  filesResponse: FileTextResponse[]
  isLoading: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
    this.files = []
    this.filesResponse = []
    this.isLoading = false
  }

  async sendTextAppEvent(method: string, formData: object): Promise<void> {
    try {
      const response = (await SDK.Bridge?.sendBotEvent({
        method,
        params: formData,
      })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке команды ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response

        if (method === 'send_notification') {
          this.rootStore.toastStore.showToast('NotificationStatus: ok', 6000)
        }
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке команды ${e?.message}`)
    }
  }

  clearResponse() {
    this.response = null
  }

  async uploadFiles() {
    const response = (await SDK.Bridge?.sendClientEvent({
      method: 'upload_files',
      params: { type: '' },
    })) as UploadFilesResponse

    if (response?.payload?.status === STATUS.ERROR) {
      this.rootStore.toastStore.showToast(`Ошибка при загрузке файла ${response?.payload?.errorCode}`)
    }

    runInAction(() => {
      this.files = response?.payload?.records
    })
  }

  async uploadFile() {
    const response = (await SDK.Bridge?.sendClientEvent({
      method: 'upload_file',
      params: { type: '' },
    })) as UploadFileResponse

    if (response?.payload?.status === STATUS.ERROR) {
      this.rootStore.toastStore.showToast(`Ошибка при загрузке файла ${response?.payload?.errorCode}`)
    }

    runInAction(() => {
      this.files = [response?.payload?.record]
    })
  }

  removeFile(id: string) {
    this.files = this.files.filter(file => file.fileId !== id)
  }

  clearFiles() {
    this.files = []
    this.filesResponse = []
  }

  private parseFilesResponse(text: string): Array<FileTextResponse> {
    return text
      .split('\n')
      .filter(textRow => !!textRow.trim())
      .map(textRow => {
        console.log(textRow)
        const [attr, rawText] = textRow.split(':')
        return {
          attr,
          value: rawText.trim().replace(/\*\*/g, ''),
        }
      })
  }

  async sendFileAppEvent(method: string): Promise<void> {
    try {
      runInAction(() => (this.isLoading = true))

      const response = (await SDK.Bridge?.sendBotEvent({
        method,
        params: { type: '' },
        files: this.files,
        timeout: 60000,
      })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке команды с файлами ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response

        // @ts-expect-error: object cast error
        this.filesResponse = this.parseFilesResponse(response.payload?.result)
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке команды с файлами ${e?.message}`)
    } finally {
      runInAction(() => (this.isLoading = false))
    }
  }
}
