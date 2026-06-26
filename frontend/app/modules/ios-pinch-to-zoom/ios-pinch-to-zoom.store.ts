import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'

export class IosPinchToZoomStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
  }

  async setAllowIosSwipe(allowed: boolean) {
    await SDK.iOS.allowPinchToZoom(allowed)
  }
}
