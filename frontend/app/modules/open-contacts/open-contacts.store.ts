import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'

export class OpenContactsStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  async openContacts(): Promise<void> {
    try {
      const response = (await SDK.openClientContacts()) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при открытии контактов ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при открытии контактов ${e?.message}`)
    }
  }
}
