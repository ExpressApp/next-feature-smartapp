import * as SDK from '@expressms/smartapp-sdk'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { GetLayoutTypeResponse, STATUS, SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'
import { LayoutSubscriptionEvent } from './layout-type.types'

export class LayoutTypeStore {
  rootStore: RootStore
  layoutType: string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.layoutType = ''
  }

  private layoutTypeCallback(event: LayoutSubscriptionEvent) {
    this.layoutType = event.payload.layoutType
  }

  async getLayoutType() {
    try {
      const response: GetLayoutTypeResponse = await SDK.getLayoutType()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Error getting layout type ${response.payload.errorCode}`)
        return
      }

      runInAction(() => {
        this.layoutType = response.payload.layoutType
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Error getting layout type ${e?.message || e}`)
    }
  }

  async subscribeLayoutTypeChange() {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.LAYOUT_TYPE,
      callback: this.layoutTypeCallback.bind(this),
    })

    console.log('Subscribed layout_type')
  }

  async unsubscribeLayoutTypeChange() {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.LAYOUT_TYPE,
      callback: this.layoutTypeCallback,
    })
  }
}
