import { toast, ToastPosition } from 'react-toastify'
import { RootStore } from '../../store/rootStore'

export class ToastStore {
  rootStore: RootStore
  isDarkTheme: boolean

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.isDarkTheme = false
  }

  setTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme
  }

  showToast(text: string) {
    const toastOptions = {
      theme: this.isDarkTheme ? 'dark' : 'light',
      position: 'bottom-left' as ToastPosition,
      autoClose: 3000,
    }

    toast.info(text, toastOptions)
  }
}
