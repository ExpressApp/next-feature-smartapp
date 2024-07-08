import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { EchoResponse } from './guaranteed-delivery.types'

export class GuaranteedDeliveryStore {
  rootStore: RootStore
  response: EchoResponse | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async sendAppEvent(text: string): Promise<void> {
    try {
      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'echo',
        params: {
          text,
        },
        guaranteed_delivery_required: true,
      })) as EchoResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при отправке запроса ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при отправке запроса ${e?.message}`)
    }
  }
}
