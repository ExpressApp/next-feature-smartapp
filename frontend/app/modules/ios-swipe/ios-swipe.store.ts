import * as SDK from '@expressms/smartapp-sdk'
import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'

export class IosSwipeStore {
  rootStore: RootStore
  showIosSwipeToast: boolean
  private callbackAlreadySet: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.showIosSwipeToast = false
    this.callbackAlreadySet = false
  }

  onReceive(event: EmitterEventPayload) {
    if (event.type === 'ios_swipe' && this.showIosSwipeToast) {
      this.rootStore.toastStore.showToast('Получено событие ios_swipe')
    }
  }

  subscribeIosSwipeEvent() {
    if (!this.callbackAlreadySet) {
      SDK.Bridge?.onReceive(this.onReceive.bind(this))
      this.callbackAlreadySet = true
    }
    this.showIosSwipeToast = true
  }

  unsubscribeIosSwipeEvent() {
    this.showIosSwipeToast = false
  }
}
