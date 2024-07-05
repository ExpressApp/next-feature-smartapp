import { Bridge } from '@expressms/smartapp-sdk'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { BotFeature, BotMenuResponse } from './features.types'

export class FeaturesStore {
  rootStore: RootStore
  showMainLoader: boolean
  features: Array<BotFeature>

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.showMainLoader = true
    this.features = []
  }

  async loadFeatures() {
    try {
      const response = (await Bridge?.sendBotEvent({
        method: 'menu',
        params: {},
      })) as BotMenuResponse

      runInAction(() => {
        this.features = response?.payload?.result || []
      })
    } catch (e) {
      console.log('Error loading features', e)
    } finally {
      runInAction(() => {
        this.showMainLoader = false
      })
    }
  }
}
