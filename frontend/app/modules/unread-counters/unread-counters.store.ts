import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { EntityType, UnreadCounterSubscriptionEvent } from './unread-counters.types'

export class UnreadCountersStore {
  rootStore: RootStore
  unreadCounter: number | null
  callback: Function

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.unreadCounter = null
    this.callback = this.unreadCounterCallback.bind(this)
  }

  private unreadCounterCallback(event: UnreadCounterSubscriptionEvent) {
    this.unreadCounter = event.payload.unreadCounter
  }

  async getUnreadCounter(type: EntityType, id: string) {
    try {
      const response = await SDK.getUnreadCounter({ type, id })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка получения каунтера ${response.payload.errorCode}`)
        return
      }

      runInAction(() => {
        this.unreadCounter = response.payload.unreadCounter
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка получения каунтера ${e?.message}`)
    }
  }

  async subscribeUnreadCounterChange(type: EntityType, id: string) {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.UNREAD_COUNTER_CHANGE,
      callback: this.callback,
      payload: {
        type,
        id,
      }
    })

    console.log('Subscribed unread_counter_change')
  }

  async unsubscribeUnreadCounterChange(type: EntityType, id: string) {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.UNREAD_COUNTER_CHANGE,
      callback: this.callback,
      payload: {
        type,
        id,
      }
    })

    console.log('Unubscribed unread_counter_change')
  }
}
