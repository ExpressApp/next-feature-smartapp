import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StorageValueType } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class ClientStorageStore {
  rootStore: RootStore
  valueFromStorage: string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.valueFromStorage = ''
  }

  async clientStorageGet(key: string): Promise<void> {
    try {
      const response = await SDK.clientStorageGet({ key })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при получении значения из хранилища ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.valueFromStorage = JSON.stringify(response.payload.value, null, 2)
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при получении значения из хранилища ${e?.message}`)
    }
  }

  async clientStorageSet(key: string, value: StorageValueType): Promise<void> {
    try {
      const response = await SDK.clientStorageSet({ key, value })

      const text =
        response.payload.status === STATUS.ERROR
          ? `Ошибка при получении значения из хранилища ${response.payload.errorCode}`
          : 'Сохранено'

      this.rootStore.toastStore.showToast(text)
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при сохранении значения в хранилище ${e?.message}`)
    }
  }

  async clientStorageRemove(key: string): Promise<void> {
    try {
      const response = await SDK.clientStorageRemove({ key })

      const text =
        response.payload.status === STATUS.ERROR
          ? `Ошибка при удалении значения из хранилища ${response.payload.errorCode}`
          : 'Удалено'

      this.rootStore.toastStore.showToast(text)
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при удалении значения из хранилища ${e?.message}`)
    }
  }

  async clientStorageClear(): Promise<void> {
    try {
      const response = await SDK.clientStorageClear()

      const text =
        response.payload.status === STATUS.ERROR
          ? `Ошибка при очистке хранилища ${response.payload.errorCode}`
          : 'Очищено полностью'

      this.rootStore.toastStore.showToast(text)
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при очистке хранилища ${e?.message}`)
    }
  }
}
