import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'

export class CreatePersonalChatStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async createPersonalChat(huid: string): Promise<void> {
    try {
      const response = (await SDK.createPersonalChat({ huid })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при создании чата ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при создании чата ${e?.message}`)
    }
  }
}
