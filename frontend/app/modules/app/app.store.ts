import * as SDK from '@expressms/smartapp-sdk'
import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { RootStore } from '../../store/rootStore'
import { IosSwipeSubscriptionEvent, Methods } from './app.types'
import { runInAction } from 'mobx'

export class AppStore {
  rootStore: RootStore
  isLoaded: boolean
  isPinned: boolean | null
  platform: string
  iosSwipeCallback: (e: IosSwipeSubscriptionEvent) => void

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.platform = new URLSearchParams(window.location.search).get('platform') || 'unknown'
    this.isLoaded = false
    this.isPinned = null
    this.iosSwipeCallback = this.iosSwipeCallbackFunc.bind(this)
  }

  private iosSwipeCallbackFunc(event: IosSwipeSubscriptionEvent) {
    this.rootStore.toastStore.showToast(`Получено событие ios_swipe, ${JSON.stringify(event.payload)}`)
  }

  async sendReady(): Promise<void> {
    const response = await SDK.ready()

    const meta = response?.payload?.openSmartAppMeta
    const initialData = response?.payload?.initialData

    runInAction(() => {
      this.isPinned = response?.payload?.isPinned ?? null
    })

    if (meta || initialData?.initiator) {
      runInAction(() => {
        this.rootStore.initialDataStore.setInitialData(response)
        window.location.hash = '/initial-data'
      })
      return
    }
  }

  private eventCallback({ type, payload }: EmitterEventPayload) {
    if (typeof payload !== 'object') return

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
      case Methods.SMARTAPP_RPC:
        this.rootStore.toastStore.showToast(`Пришло асинхронное событие от бота, см. в логах`)
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

  handleRedirectReason() {
    const redirectReason = new URLSearchParams(location.search).get('redirect_reason')
    switch (redirectReason) {
      case 'general_error':
        location.hash = '/web-commands-pipeline-error'
        break
      case 'wrong_credentials':
        location.hash = '/web-commands-pipeline'
        this.rootStore.toastStore.showToast('Неверный логин/пароль')
        break
      case null:
        break
      default:
        this.rootStore.toastStore.showToast('Неверный redirect_reason')
        break
    }
  }
}
