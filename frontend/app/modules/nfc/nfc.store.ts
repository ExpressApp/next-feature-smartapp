import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { NfcWriteMessage, STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class NfcStore {
  rootStore: RootStore
  response: object | null
  nfcEnabled: boolean | null
  nfcAvailable: boolean | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
    this.nfcEnabled = null
    this.nfcAvailable = null
  }

  async readTag(): Promise<void> {
    try {
      const response = await SDK.NFC.readTag()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при чтении NFC метки ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при чтении NFC метки ${e?.message}`)
    }
  }

  async writeTag(messages: NfcWriteMessage[]): Promise<void> {
    try {
      const response = await SDK.NFC.writeTag(messages)

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при записи NFC метки ${response.payload.errorCode}`)
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при записи NFC метки ${e?.message}`)
    }
  }

  async getStatus(): Promise<void> {
    try {
      const response = await SDK.NFC.getStatus()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка запроса статуса NFC ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.nfcAvailable = response.payload.nfcAvailable
        this.nfcEnabled = response.payload.nfcEnabled
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка запроса статуса NFC ${e?.message}`)
    }
  }
}
