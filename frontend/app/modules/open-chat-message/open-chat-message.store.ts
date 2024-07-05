import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'

export class OpenChatMessageStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
  }

  async openChatMessage(groupChatId: string, syncId: string): Promise<void> {
    try {
      const response = (await SDK.openChatMessage({ groupChatId, syncId })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка открытия сообщения ${response.payload.errorCode}`)
        return
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка открытия сообщения ${e?.message}`)
    }
  }
}
