import { createAction } from 'redux-actions'
import { PerformanceResult } from '../../types'

export const SET_MAIN_LOADER = 'SET_MAIN_LOADER'
export const SET_REDIRECT_PATH = 'SET_REDIRECT_PATH'
export const SET_SHOW_IOS_SWIPE_TOAST = 'SET_SHOW_IOS_SWIPE_TOAST'
export const TOGGLE_PERFORMANCE_TEST = 'TOGGLE_PERFORMANCE_TEST'
export const SET_PERFORMANCE_TEST_PROGRESS = 'SET_PERFORMANCE_TEST_PROGRESS'
export const TOGGLE_HIGHLOAD_TEST = 'TOGGLE_HIGHLOAD_TEST'
export const SET_HIGHLOAD_TEST_PROGRESS = 'SET_HIGHLOAD_TEST_PROGRESS'

export const setMainLoader = createAction(SET_MAIN_LOADER, (mainLoader: boolean) => mainLoader)
export const setRedirectPath = createAction(SET_REDIRECT_PATH, (redirectPath: string) => redirectPath)
export const setShowIosSwipeToast = createAction(
  SET_SHOW_IOS_SWIPE_TOAST,
  (showIosSwipeToast: boolean) => showIosSwipeToast
)
export const togglePerformanceTest = createAction(TOGGLE_PERFORMANCE_TEST)
export const setPerformanceTestProgress = createAction(
  SET_PERFORMANCE_TEST_PROGRESS,
  ({ progress, results }: { progress: number; results: Array<PerformanceResult> }) => ({ progress, results })
)
export const toggleHighloadTest = createAction(TOGGLE_HIGHLOAD_TEST)
export const setHighloadTestProgress = createAction(
  SET_HIGHLOAD_TEST_PROGRESS,
  ({
    requestRps,
    responseRps,
    responseTimeAvg,
  }: {
    requestRps: number
    responseRps: number
    responseTimeAvg: number
  }) => ({ requestRps, responseRps, responseTimeAvg })
)

export type setMainLoaderActionType = ReturnType<typeof setMainLoader>
export type setRedirectPathActionType = ReturnType<typeof setRedirectPath>
export type setShowIosSwipeToastActionType = ReturnType<typeof setShowIosSwipeToast>
export type setPerformanceTestProgressActionType = ReturnType<typeof setPerformanceTestProgress>
export type toggleHighloadTestActionType = ReturnType<typeof toggleHighloadTest>
export type setHighloadTestProgressActionType = ReturnType<typeof setHighloadTestProgress>
