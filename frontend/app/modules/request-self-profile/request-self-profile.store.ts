import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class RequestSelfProfileStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async requestSelfProfile(): Promise<void> {
    try {
      const response = await SDK.requestSelfProfile()

      if (response?.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast('Ошибка при запросе профиля')
      }

      runInAction(() => {
        this.response = response?.payload || {}
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при запросе профиля ${e?.message}`)
    }
  }
}
