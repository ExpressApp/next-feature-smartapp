import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class BackgroundEventsStore {
  rootStore: RootStore
  interval: NodeJS.Timeout | null
  counterSent: number
  counterRecv: number

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.interval = null
    this.counterSent = 0
    this.counterRecv = 0
  }

  async tick(): Promise<void> {
    try {
      runInAction(() => {
        this.counterSent++
      })

      const response = (await SDK.Bridge?.sendBotEvent({
        method: 'menu',
        params: {},
        timeout: 3000,
      })) as StatusResponse

      if (response.payload.status === STATUS.ERROR) return

      runInAction(() => {
        this.counterRecv++
      })
    } catch (e) {
      console.error('Не удалось доставить сообщение', e)
    }
  }

  run(intervalMs: number) {
    this.counterSent = 0
    this.counterRecv = 0
    this.interval = setInterval(this.tick.bind(this), intervalMs)

    this.tick()
  }

  stop() {
    if (!this.interval) return

    clearInterval(this.interval)
    this.interval = null
  }
}
