import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'

export class CleanCacheStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async cleanCache(): Promise<void> {
    try {
      const response = await SDK.cleanCache()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка очистки кеша ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка очистки кеша ${e?.message}`)
    }
  }
}
