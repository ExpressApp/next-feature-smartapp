import * as SDK from '@expressms/smartapp-sdk'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { ConnnectionStatusSubscriptionEvent } from './connection-status.types'

export class ConnectionStatusStore {
  rootStore: RootStore
  connectionStatus: string | null
  subscribedConnectionStatus: string | null
  callback: Function

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.connectionStatus = null
    this.subscribedConnectionStatus = null

    this.callback = this.connectionStatusCallback.bind(this)
  }

  private connectionStatusCallback(event: ConnnectionStatusSubscriptionEvent) {
    this.subscribedConnectionStatus = event.payload.connectionStatus
  }

  async getConnectionStatus() {
    try {
      const response = await SDK.getConnectionStatus()

      runInAction(() => {
        this.connectionStatus = response.payload.connectionStatus
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка получения статуса подключения ${e?.message || e}`)
    }
  }

  async subscribeConnectionStatusChange() {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.CONNECTION_STATUS,
      callback: this.callback,
    })

    console.log('Subscribed connection_status')
  }

  async unsubscribeConnectionStatusChange() {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.CONNECTION_STATUS,
      callback: this.callback,
    })
  }
}
