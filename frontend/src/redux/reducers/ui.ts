import { handleActions } from 'redux-actions'
import { UIState } from '../../types'
import {
  SET_HIGHLOAD_TEST_PROGRESS,
  SET_MAIN_LOADER,
  SET_PERFORMANCE_TEST_PROGRESS,
  SET_REDIRECT_PATH,
  SET_SHOW_IOS_SWIPE_TOAST,
  TOGGLE_HIGHLOAD_TEST,
  TOGGLE_PERFORMANCE_TEST,
  setHighloadTestProgressActionType,
  setMainLoaderActionType,
  setPerformanceTestProgressActionType,
  setRedirectPathActionType,
  setShowIosSwipeToastActionType,
} from '../actions/ui'
import { getQueryParam } from '../../helpers'

const initialState: UIState = {
  mainLoader: false,
  redirectPath: '',
  theme: getQueryParam('theme') || 'default',
  showIosSwipeToast: false,
  performanceTest: {
    progress: 0,
    running: false,
    results: [],
  },
  highloadTest: {
    running: false,
    requestRps: 0,
    responseRps: 0,
    responseTimeAvg: -1,
    progress: 0,
  },
}

const reducers = {
  [SET_MAIN_LOADER]: (state: UIState, { payload: mainLoader }: setMainLoaderActionType): UIState => ({
    ...state,
    mainLoader,
  }),
  [SET_REDIRECT_PATH]: (state: UIState, { payload: redirectPath }: setRedirectPathActionType): UIState => ({
    ...state,
    redirectPath,
  }),
  [SET_SHOW_IOS_SWIPE_TOAST]: (
    state: UIState,
    { payload: showIosSwipeToast }: setShowIosSwipeToastActionType
  ): UIState => ({
    ...state,
    showIosSwipeToast,
  }),
  [TOGGLE_PERFORMANCE_TEST]: ({ performanceTest: { running, ...perf }, ...state }: UIState): UIState => ({
    ...state,
    performanceTest: {
      ...perf,
      progress: 0,
      running: !running,
      results: running ? perf.results : [],
    },
  }),
  [SET_PERFORMANCE_TEST_PROGRESS]: (
    state: UIState,
    { payload: { progress, results } }: setPerformanceTestProgressActionType
  ): UIState => ({
    ...state,
    performanceTest: {
      ...state.performanceTest,
      progress,
      results,
    },
  }),
  [TOGGLE_HIGHLOAD_TEST]: ({ highloadTest: { running, ...highload }, ...state }: UIState): UIState => ({
    ...state,
    highloadTest: {
      ...(running ? highload : initialState.highloadTest),
      running: !running
    },
  }),
  [SET_HIGHLOAD_TEST_PROGRESS]: (
    state: UIState,
    { payload: { requestRps, responseRps, responseTimeAvg } }: setHighloadTestProgressActionType
  ): UIState => ({
    ...state,
    highloadTest: {
      ...state.highloadTest,
      requestRps,
      responseRps,
      responseTimeAvg,
    },
  })
}

export const ui = handleActions<UIState, any>(reducers, initialState)
