import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable, runInAction } from 'mobx'
import { BotMenuResponse } from '../features-list/features.types'

export class HideLogsStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async sendEvent(hideSend: boolean, hideRecv: boolean): Promise<void> {
    try {
      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'menu',
        params: {},
        hide_send_event_data: hideSend,
        hide_recv_event_data: hideRecv,
      })) as BotMenuResponse

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при доставке сообщения боту ${e?.message || e}`)
    }
  }
}
