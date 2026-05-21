import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'
import type { KeycloakTokenResponse } from './kc-access-token.types'

export class KcAccessTokenStore {
  rootStore: RootStore
  token: string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.token = ''
  }

  async getToken(): Promise<void> {
    try {
      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'keycloak-token',
        params: {},
      })) as KeycloakTokenResponse

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при запросе токена ${JSON.stringify(response.payload)}`)
      }

      runInAction(() => {
        this.token = response.payload.result
      })
    } catch (e) {
      this.rootStore.toastStore.showToast('Ошибка при запросе токена')
    }
  }
}
