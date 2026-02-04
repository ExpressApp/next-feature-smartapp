import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import {
  FILE_MEDIA_QUALITY,
  STATUS,
  UploadFilesTypeResponse,
  UploadFileTypeResponse,
} from '@expressms/smartapp-sdk/build/main/types'
import { makeObservable, observable, runInAction } from 'mobx'
import { BotFilesMethods } from './media-quality-types'

export class MediaQualityStore {
  rootStore: RootStore
  response: UploadFileTypeResponse | UploadFilesTypeResponse | null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      response: observable,
    })

    this.rootStore = rootStore
    this.response = null
  }

  async callBotFileMethod({
    method,
    mediaQuality,
  }: {
    method: BotFilesMethods
    mediaQuality: FILE_MEDIA_QUALITY
  }): Promise<void> {
    const responseTextSuffix = method === BotFilesMethods.ECHO_FILES ? 'файлов' : 'файла'

    try {
      const params = { mimeType: '', mediaQuality }

      const response =
        method === BotFilesMethods.ECHO_FILES ? await SDK.uploadFiles(params) : await SDK.uploadFile(params)

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(
          `Ошибка при отправке ${responseTextSuffix} SmartApp ${response.payload.errorCode}`
        )
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      if (e instanceof Error) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке ${responseTextSuffix} SmartApp ${e?.message}`)
      }
    }
  }
}
