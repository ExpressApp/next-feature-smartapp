import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class GetChatsStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async getChats(filter: string): Promise<void> {
    try {
      const response = (await SDK.getChats({ filter })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при поиске чата ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при поиске чата ${e?.message}`)
    }
  }
}
