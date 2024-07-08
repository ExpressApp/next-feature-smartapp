import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class CreateDeeplinkStore {
  rootStore: RootStore
  deeplink: string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.deeplink = ''
  }

  async createDeeplink(appId: string, meta: string) {
    try {
      const response = await SDK.createDeeplink(appId, JSON.parse(meta))

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при создании deeplink ${response.payload.errorCode}`)
        return
      }

      runInAction(() => {
        this.deeplink = response.payload.data?.deeplink || ''
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при создании deeplink ${e?.message}`)
    }
  }
}
