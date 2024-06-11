import { createSelector } from 'reselect'
import { AppState } from '../../types'

export const getMainLoader = createSelector([(state: AppState) => state.ui.mainLoader], mainLoader => mainLoader)

export const getRedirectPath = createSelector(
  [(state: AppState) => state.ui.redirectPath],
  redirectPath => redirectPath
)

export const getHighloadTestRunning = (state: AppState) => state.ui.highloadTest.running
