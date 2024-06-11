import { call, delay, put, select, spawn } from 'redux-saga/effects'
import {
  setHighloadTestProgress,
  setMainLoader,
  setPerformanceTestProgress,
  togglePerformanceTest,
} from '../actions/ui'
import { Bridge as bridge } from '@expressms/smartapp-sdk'
import { AppState, BotFeaturesResponse, PerformanceResult } from '../../types'
import { HIGHLOAD_TEST_MEASURE_INTERVAL, HIGHLOAD_TEST_RPS_STEP, MENU_EVENT, PERF_TEST_COUNTER } from '../../constants'
import { loadFeaturesSuccess } from '../actions/bot'
import { toast, Theme, ToastPosition } from 'react-toastify'
import { getHighloadTestRunning } from '../selectors/ui'
import { HighloadTester } from '../../helpers/highload-tester'

let performanceTestTask = null

export function* loadFeaturesSaga() {
  try {
    yield put(setMainLoader(true))

    const response: BotFeaturesResponse = yield bridge.sendBotEvent(MENU_EVENT)

    if (response) yield put(loadFeaturesSuccess(response.payload.result))
  } catch (e: any) {
    console.error('loadFeaturesSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* showToast(text: string) {
  try {
    const theme = yield select((state: AppState) => state.ui.theme)

    const toastOptions = {
      theme: (theme === 'dark' ? 'dark' : 'light') as Theme,
      position: 'bottom-left' as ToastPosition,
      autoClose: 3000,
    }

    yield call(toast.info, text, toastOptions)
  } catch (e: any) {
    console.error('showToast error', e)
  }
}

function* performanceIterationSaga(isSync) {
  const ts1 = new Date().getTime()

  try {
    yield bridge.sendBotEvent({
      ...MENU_EVENT,
      sync_request: isSync,
    })
  } catch (e: any) {
    console.error('performanceIterationSaga error', e)
    return 0
  }

  const ts2 = new Date().getTime()

  return ts2 - ts1
}

function* performanceTestSaga() {
  let iteration = 0
  let results: Array<PerformanceResult> = []
  let progress = 0

  while (iteration < PERF_TEST_COUNTER) {
    const sync = yield call(performanceIterationSaga, true)
    const async = yield call(performanceIterationSaga, false)

    iteration++

    results = [
      ...results,
      {
        sync,
        async,
        eventNumber: `#${iteration}`,
      },
    ]
    progress = Math.ceil((iteration * 100) / PERF_TEST_COUNTER)

    yield put(setPerformanceTestProgress({ progress, results }))
  }
  yield put(togglePerformanceTest())
}

export function* togglePerformanceTestSaga() {
  try {
    const performanceTest = yield select((state: AppState) => state.ui.performanceTest)

    if (!performanceTest.running) {
      if (performanceTestTask) {
        performanceTestTask.cancel()
        performanceTestTask = null
      }
      return
    } else {
      performanceTestTask = yield spawn(performanceTestSaga)
    }
  } catch (e: any) {
    console.error('togglePerformanceTestSaga error', e)
  }
}

export function* toggleHighloadTestSaga() {
  let targetRequestRps = 1
  let prevMetrics = {
    totalResponseCount: 0,
    totalRequestCount: 0,
    totalRequestsTime: -1,
  }

  const running = yield select(getHighloadTestRunning)
  if (!running) return

  const tester = new HighloadTester()

  while (true) {
    const running = yield select(getHighloadTestRunning)
    if (!running) {
      tester.stop()
      return
    }

    tester.start(targetRequestRps)

    yield delay(HIGHLOAD_TEST_MEASURE_INTERVAL)

    const currMetrics = tester.getMetrics()
    const requestCount = currMetrics.totalRequestCount - prevMetrics.totalRequestCount
    const requestRps = requestCount / (HIGHLOAD_TEST_MEASURE_INTERVAL / 1000)
    const responseRps =
      (currMetrics.totalResponseCount - prevMetrics.totalResponseCount) / (HIGHLOAD_TEST_MEASURE_INTERVAL / 1000)
    const responseTimeAvg = (currMetrics.totalRequestsTime - prevMetrics.totalRequestsTime) / (requestCount || 1)

    console.log("Metrics", currMetrics)

    yield put(setHighloadTestProgress({ requestRps, responseRps, responseTimeAvg }))

    prevMetrics = currMetrics
    targetRequestRps += HIGHLOAD_TEST_RPS_STEP
  }
}
