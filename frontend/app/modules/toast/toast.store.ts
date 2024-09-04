import { toast, ToastPosition, TypeOptions } from 'react-toastify'
import { RootStore } from '../../store/rootStore'
import ToastInner from './ToastInner'

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

  showToast(text: string, timeout = 3000) {
    const toastOptions = {
      theme: this.isDarkTheme ? 'dark' : 'light',
      position: 'bottom-left' as ToastPosition,
      autoClose: timeout,
      type: 'info' as TypeOptions,
    }

    toast(ToastInner({ text }), toastOptions)
  }
}
