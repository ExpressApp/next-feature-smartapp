import { Bridge } from '@expressms/smartapp-sdk'
import { makeAutoObservable, runInAction } from 'mobx'
import { RootStore } from '../../store/rootStore'
import { PerformanceTestResult } from './sync-request.types'
import { STATUS, StatusResponse } from '@expressms/smartapp-sdk/build/main/types'

const PERF_TEST_COUNTER = 10

export class SyncRequestStore {
  rootStore: RootStore
  response: object | null
  perfTestResults: Array<PerformanceTestResult>
  perfTestProgress: number
  perfTestRunning: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.response = null
    this.perfTestProgress = 0
    this.perfTestRunning = false
    this.perfTestResults = []
  }

  private async perfomanceTestIteration(isSync: boolean) {
    const ts1 = new Date().getTime()

    try {
      await Bridge?.sendBotEvent({
        method: 'menu',
        params: {},
        sync_request: isSync,
      })
    } catch (e) {
      console.error('perfomanceTestIteration error', e)
      return 0
    }

    const ts2 = new Date().getTime()

    return ts2 - ts1
  }

  async startPerformanceTest() {
    let iteration = 0

    this.perfTestProgress = 0
    this.perfTestRunning = true
    this.perfTestResults = []

    while (this.perfTestRunning && iteration < PERF_TEST_COUNTER) {
      const sync = await this.perfomanceTestIteration(true)
      const async = await this.perfomanceTestIteration(false)

      iteration++

      runInAction(() => {
        this.perfTestResults = [
          ...this.perfTestResults,
          {
            sync,
            async,
            eventNumber: `#${iteration}`,
          },
        ]
        this.perfTestProgress = Math.ceil((iteration * 100) / PERF_TEST_COUNTER)
      })
    }
  }

  stopPerformanceTest() {
    this.perfTestRunning = false
  }

  async sendAppEvent(isSync: boolean) {
    try {
      const response = (await Bridge?.sendBotEvent({
        method: 'menu',
        params: {},
        sync_request: isSync,
      })) as StatusResponse

      if (response?.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при выполнении запроса ${response.payload.errorCode}`)
      }

      runInAction(() => {
        this.response = response || {}
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при выполнении запроса ${e?.message}`)
    }
  }
}
