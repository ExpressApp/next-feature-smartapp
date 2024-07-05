import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'

export class OpenSettingsStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  async openSettings(): Promise<void> {
    try {
      if (this.rootStore.appStore.platform === 'web') {
        this.rootStore.toastStore.showToast(`Открытие настроек не поддерживается на платформе Web`)
        return
      }

      const response = (await SDK.openClientSettings()) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при открытии настроек ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при открытии настроек ${e?.message}`)
    }
  }
}
