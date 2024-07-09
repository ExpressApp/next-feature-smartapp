import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'

export class MaxFileSizeStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  async uploadFile(mimeType: string, maxSize: number): Promise<void> {
    try {
      const response = await SDK.uploadFiles({ mimeType, maxSize })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке файла SmartApp ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке файла SmartApp ${e?.message}`)
    }
  }
}
