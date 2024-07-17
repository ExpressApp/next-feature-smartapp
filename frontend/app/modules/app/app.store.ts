import * as SDK from '@expressms/smartapp-sdk'
import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { RootStore } from '../../store/rootStore'
import { Methods } from './app.types'
import { runInAction } from 'mobx'

export class AppStore {
  rootStore: RootStore
  isLoaded: boolean
  platform: string

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.platform = new URLSearchParams(window.location.search).get('platform') || 'unknown'
  }

  async sendReady(): Promise<void> {
    const response = await SDK.ready()

    const meta = response?.payload?.openSmartAppMeta
    const initialData = response?.payload?.initialData

    if (meta || initialData?.initiator) {
      runInAction(() => {
        this.rootStore.initialDataStore.setInitialData(response?.payload as object)
        window.location.hash = '/initial-data'
      })
      return
    }

    window.location.hash = '/'
  }

  private eventCallback({ type, payload }: EmitterEventPayload) {
    if (typeof payload !== 'object') return

    const showIosSwipeToast = this.rootStore.iosSwipeStore.showIosSwipeToast

    switch (type) {
      case Methods.CLEAN_CACHE:
      case Methods.MOVE_TO_ROOT:
        this.rootStore.toastStore.showToast(`Получено событие ${type}`)
        break
      case Methods.BACK_PRESSED:
        if (window.location.hash !== '#/') {
          window.location.hash = '#/'
        }
        break
      case Methods.IOS_SWIPE:
        if (showIosSwipeToast) this.rootStore.toastStore.showToast(`Получено событие ${type}`)
        break
      default:
        break
    }
  }

  async subscribeBridgeOnReceive(): Promise<void> {
    SDK.Bridge?.onReceive(this.eventCallback.bind(this))
  }

  handleLocationChange(pathname: string) {
    const isRoot = pathname === '/'
    SDK.routingChanged(isRoot)?.catch(() => {})
  }
}
