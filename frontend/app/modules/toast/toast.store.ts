import { toast, ToastPosition } from 'react-toastify'
import { RootStore } from '../../store/rootStore'
import { makeObservable, observable } from 'mobx'

export class ToastStore {
  rootStore: RootStore
  isDarkTheme: boolean
  @observable lastText: string

  constructor(rootStore: RootStore) {
    makeObservable(this)

    this.rootStore = rootStore
    this.isDarkTheme = false
    this.lastText = ''
  }

  setTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme
  }

  showToast(text: string, timeout = 3000) {
    this.lastText = text

    const toastOptions = {
      theme: this.isDarkTheme ? 'dark' : 'light',
      position: 'bottom-left' as ToastPosition,
      autoClose: timeout,
    }

    toast.info(text, toastOptions)
  }
}
