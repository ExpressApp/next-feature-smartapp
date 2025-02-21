import * as SDK from '@expressms/smartapp-sdk'
import { makeObservable, observable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { GetAppVisibilityResponse, STATUS, SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { AppVisibilitySubscriptionEvent } from './app-visibility.types'

export class AppVisibilityStore {
  rootStore: RootStore
  @observable visibile: boolean | null
  callback: () => void

  constructor(rootStore: RootStore) {
    makeObservable(this)

    this.rootStore = rootStore
    this.visibile = null
    this.callback = this.visibilityChangeCallback.bind(this)
  }

  private visibilityChangeCallback(event: AppVisibilitySubscriptionEvent) {
    alert(event.payload.visible ? 'SmartApp видим' : 'SmartApp скрыт')
  }

  async getAppVisibility() {
    try {
      const response: GetAppVisibilityResponse = await SDK.getAppVisibility()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Error getting app visibility ${response.payload.errorCode}`)
        return
      }

      runInAction(() => {
        this.visibile = response.payload.visible
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Error getting app visibility ${e?.message || e}`)
    }
  }

  async subscribeAppVisibilityChange() {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.APP_VISIBILITY,
      callback: this.callback,
    })

    console.log('Subscribed app_visibility')
  }

  async unsubscribeAppVisibilityChange() {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.APP_VISIBILITY,
      callback: this.callback,
    })

    console.log('Unsubscribed app_visibility')
  }
}
