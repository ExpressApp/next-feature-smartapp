import * as SDK from '@expressms/smartapp-sdk'
import { File, ReadyEventResponse, STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable, runInAction } from 'mobx'

interface ListArchiveFilesPayload {
  status: STATUS
  errorCode?: string
  result?: string[]
}

interface ListArchiveFilesResponse extends EmitterEventPayload {
  payload: ListArchiveFilesPayload
}

export class SupportRequestStore {
  rootStore: RootStore
  data: ReadyEventResponse | null
  archiveFiles: string[] | null
  isSendingToBot: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.data = null
    this.archiveFiles = null
    this.isSendingToBot = false
  }

  setInitialData(data: ReadyEventResponse) {
    this.data = data
  }

  get files(): File[] {
    const initialData = this.data?.payload?.initialData
    if (initialData?.initiator === 'support_request' && initialData.meta?.files) {
      return initialData.meta.files
    }
    return []
  }

  async sendFilesToBot(): Promise<void> {
    const files = this.files
    if (!files.length) return

    try {
      runInAction(() => {
        this.isSendingToBot = true
        this.archiveFiles = null
      })

      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'list_archive_files',
        params: {},
        files: files,
        timeout: 60000,
      })) as ListArchiveFilesResponse | undefined

      if (response?.payload?.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка: ${response?.payload?.errorCode || 'unknown error'}`)
        return
      }

      runInAction(() => {
        this.archiveFiles = response?.payload?.result ?? []
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке файла боту: ${e?.message}`)
    } finally {
      runInAction(() => {
        this.isSendingToBot = false
      })
    }
  }
}
