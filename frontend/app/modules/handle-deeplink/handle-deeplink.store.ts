import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'

export class HandleDeeplinkStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
  }

  async handleDeeplink(link: string) {
    try {
      const response = await SDK.handleDeeplink({ link })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при открытии deeplink ${response.payload.errorCode}`)
        return
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при открытии deeplink ${e?.message}`)
    }
  }
}
