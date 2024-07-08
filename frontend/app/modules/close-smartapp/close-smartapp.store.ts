import { closeSmartApp } from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'

export class CloseSmartAppStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  async closeSmartApp(): Promise<void> {
    await closeSmartApp()
  }
}
