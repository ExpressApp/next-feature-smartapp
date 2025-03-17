import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { SmartAppListEntry, STATUS, SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { SmartAppListSubscriptionEvent } from './get-smartapp-list.types'
export class GetSmartAppListStore {
  rootStore: RootStore
  response: object | null
  callback: () => void
  smartAppListFromSubscription: SmartAppListEntry[] | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
    this.smartAppListFromSubscription = null
    this.callback = this.smartAppListCallback.bind(this)
  }

  private smartAppListCallback(event: SmartAppListSubscriptionEvent) {
    this.rootStore.toastStore.showToast('Получены данные списка SmartApp')
    this.smartAppListFromSubscription = event.payload.smartappList
  }

  async getSmartAppList(): Promise<void> {
    try {
      const response = await SDK.getSmartAppList()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при запросе списка SmartApp ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при запросе списка SmartApp ${e?.message}`)
    }
  }

  async subscribeSmartAppListChange() {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.SMARTAPP_LIST,
      callback: this.callback,
    })
  }

  async unsubscribeSmartAppListChange() {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.SMARTAPP_LIST,
      callback: this.callback,
    })
  }
}
