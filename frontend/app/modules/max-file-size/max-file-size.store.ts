import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, UploadFilesTypeResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, makeObservable, observable, runInAction } from 'mobx'

export class MaxFileSizeStore {
  rootStore: RootStore
  response: UploadFilesTypeResponse | null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      response: observable,
    })

    this.rootStore = rootStore
    this.response = null
  }

  async uploadFile(mimeType: string, maxSize: number): Promise<void> {
    try {
      const response = await SDK.uploadFiles({ mimeType, maxSize })

      if (response .payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке файла SmartApp ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке файла SmartApp ${e?.message}`)
    }
  }
}
