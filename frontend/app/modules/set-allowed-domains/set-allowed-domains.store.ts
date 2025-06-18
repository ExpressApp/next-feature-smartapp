import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'

export class SetAllowedDomainsStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
  }

  async setAllowedNavigationDomains(domains: string[]): Promise<void> {
    await SDK.setAllowedNavigationDomains(domains)
    location.href = `https://${domains[0]}`
  }
}
