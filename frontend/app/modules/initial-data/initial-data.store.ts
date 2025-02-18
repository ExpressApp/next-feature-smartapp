import * as SDK from '@expressms/smartapp-sdk'
import { File, ReadyEventResponse } from '@expressms/smartapp-sdk/build/main/types'
import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'

export class InitialDataStore {
  rootStore: RootStore
  data: ReadyEventResponse | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.data = null
  }

  setInitialData(data: ReadyEventResponse) {
    this.data = data
  }

  async openFile(file: File) {
    const fileData = JSON.parse(JSON.stringify(file)) as File
    SDK.openFile(fileData)
  }
}
