import { RootStore } from '../../store/rootStore'
import { makeAutoObservable } from 'mobx'
import HighloadTester from './highload-tester'

const HIGHLOAD_TEST_RPS_STEP = 1
const HIGHLOAD_TEST_MEASURE_INTERVAL = 5000

export class HighLoadStore {
  private loadTester: HighloadTester
  private loadTestInterval: NodeJS.Timeout | null
  private loadTestPrevMetrics: {
    totalResponseCount: number
    totalRequestCount: number
    totalRequestsTime: number
  }
  private loadTestTargetRequestRps: number

  rootStore: RootStore
  loadTestRequestRps: number
  loadTestResponseRps: number
  loadTestResponseTimeAvg: number
  loadTestRunning: boolean

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.loadTestRequestRps = 0
    this.loadTestResponseRps = 0
    this.loadTestResponseTimeAvg = 0
    this.loadTestRunning = false
    this.loadTestInterval = null
  }

  loadTestIteration(): void {
    const currMetrics = this.loadTester.getMetrics()
    const requestCount = currMetrics.totalRequestCount - this.loadTestPrevMetrics.totalRequestCount
    this.loadTestRequestRps = requestCount / (HIGHLOAD_TEST_MEASURE_INTERVAL / 1000)
    this.loadTestResponseRps =
      (currMetrics.totalResponseCount - this.loadTestPrevMetrics.totalResponseCount) /
      (HIGHLOAD_TEST_MEASURE_INTERVAL / 1000)
    this.loadTestResponseTimeAvg =
      (currMetrics.totalRequestsTime - this.loadTestPrevMetrics.totalRequestsTime) / (requestCount || 1)

    this.loadTestPrevMetrics = currMetrics
    this.loadTestTargetRequestRps += HIGHLOAD_TEST_RPS_STEP

    this.loadTester.start(this.loadTestTargetRequestRps)
  }

  startLoadTest(): void {
    this.loadTestTargetRequestRps = HIGHLOAD_TEST_RPS_STEP
    this.loadTestPrevMetrics = {
      totalResponseCount: 0,
      totalRequestCount: 0,
      totalRequestsTime: -1,
    }
    this.loadTestRunning = true

    this.loadTester = new HighloadTester()
    this.loadTester.start(this.loadTestTargetRequestRps)
    this.loadTestInterval = setInterval(this.loadTestIteration.bind(this), HIGHLOAD_TEST_MEASURE_INTERVAL)
  }

  stopLoadTest(): void {
    this.loadTestRunning = false
    this.loadTester.stop()
    this.loadTestInterval && clearInterval(this.loadTestInterval)
  }
}
