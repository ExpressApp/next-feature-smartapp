import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'

export class InitialDataStore {
  rootStore: RootStore
  data: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.data = null
  }

  setInitialData(data: object | null) {
    this.data = data
  }
}
