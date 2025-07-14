import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'
import { SubscriptionEventType } from '@expressms/smartapp-sdk/build/main/types'

export class IosSwipeStore {
  rootStore: RootStore
  allowIosSwipe: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.allowIosSwipe = true
  }

  async subscribeIosSwipeEvent() {
    await SDK.subscribeClientEvents({
      eventType: SubscriptionEventType.IOS_SWIPE,
      callback: this.rootStore.appStore.iosSwipeCallback,
    })
    console.log('Subscribed ios_swipe')
  }

  async unsubscribeIosSwipeEvent() {
    await SDK.unsubscribeClientEvents({
      eventType: SubscriptionEventType.IOS_SWIPE,
      callback: this.rootStore.appStore.iosSwipeCallback,
    })
  }

  async setAllowIosSwipe(allowed: boolean) {
    this.allowIosSwipe = allowed
    await SDK.iOS.allowSwipeNavigation(allowed)
  }
}
