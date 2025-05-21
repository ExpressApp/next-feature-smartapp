import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { CredentialsType } from '@expressms/smartapp-sdk/build/main/types/proxy'

export class CredentialsStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async setCredentials(login: string, password: string, type: CredentialsType): Promise<void> {
    try { 
      const response = await SDK.setCredentials({ login, password, type })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка сохранения логина/пароля ${response.payload.errorCode}`)
      } else {
        this.rootStore.toastStore.showToast('Логин/пароль сохранены')
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка сохранения логина/пароля ${e?.message}`)
    }
  }

  async getCredentials(): Promise<void> {
    try {
      const response = await SDK.getCredentials()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка получения логина/пароля ${response.payload.errorCode}`)
        return
      }

      runInAction(() => {
        this.response = response.payload.credentials
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка получения логина/пароля ${e?.message}`)
    }
  }

  async deleteCredentials(): Promise<void> {
    try {
      const response = await SDK.deleteCredentials()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка удаления логина/пароля ${response.payload.errorCode}`)
        return
      }

      this.rootStore.toastStore.showToast('Логин/пароль удалены')
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка удаления логина/пароля ${e?.message}`)
    }
  }
}
