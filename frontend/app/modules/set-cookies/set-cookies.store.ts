import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { CookieItem } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class SetCookiesStore {
  rootStore: RootStore
  response: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
  }

  async setCookies(cookies: CookieItem[]): Promise<void> {
    await SDK.setWebResourceCookies(cookies)
  }

  async getCookies(url: string): Promise<void> {
    try {
      const response = await fetch(url, { credentials: 'include' })
      const json = await response.json()

      runInAction(() => {
        const cookie = json?.headers?.cookie || null
        this.response = { cookie }
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка запроса ${e?.message}`)
    }
  }
}
