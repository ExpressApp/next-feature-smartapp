import * as SDK from '@expressms/smartapp-sdk'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { SearchCorpPhonebookResponse } from './search-phonebook.types'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'

export class SearchPhonebookStore {
  rootStore: RootStore
  phonebook: object | null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.phonebook = null
  }

  async searchLocalPhonebook(filter: string) {
    const response = await SDK.searchLocalPhonebook({ filter })

    runInAction(() => {
      this.phonebook = response.payload
    })
  }

  async searchCorpPhonebook(filter: string) {
    const response = (await SDK.searchCorporatePhonebook({ filter })) as SearchCorpPhonebookResponse

    if (response.payload.status === STATUS.ERROR) {
      this.rootStore.toastStore.showToast(`Error search corp phonebook ${response.payload.errorCode}`)
      return
    }

    runInAction(() => {
      this.phonebook = response.payload
    })
  }
}
