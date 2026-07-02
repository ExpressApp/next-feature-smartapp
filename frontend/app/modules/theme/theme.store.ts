import { RootStore } from '../../store/rootStore'

export class ThemeStore {
  rootStore: RootStore
  isDarkTheme: boolean
  fontScale: number

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.isDarkTheme = false
    this.fontScale = parseFloat(new URLSearchParams(location.search).get('fontScale') || '1.0')
  }

  setupTheme(): void {
    const urlParams = new URLSearchParams(window.location.search)
    this.isDarkTheme = urlParams.get('theme') === 'dark'

    this.rootStore.toastStore.setTheme(this.isDarkTheme)
    document.documentElement.setAttribute('theme', urlParams.get('theme') || 'default')
  }
}
