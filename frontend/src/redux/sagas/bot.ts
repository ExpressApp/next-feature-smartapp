import { put, spawn } from 'redux-saga/effects'
import { setMainLoader } from '../actions/ui'
import { BotFeatureMethod, BotMethodResponse } from '../../types'
import { Bridge as bridge } from '@expressms/smartapp-sdk'
import { sendFeatureBotEventSuccess, setMenuResponse, setStaticFile } from '../actions/bot'
import { MENU_EVENT } from '../../constants'
import { showToast } from './ui'

export function* sendFeatureBotEventSaga(action) {
  try {
    yield put(setMainLoader(true))

    const response: BotMethodResponse = yield bridge?.sendBotEvent(action.payload)

    yield put(sendFeatureBotEventSuccess(response))
  } catch (e: any) {
    console.error('sendFeatureBotEventSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* echoStaticFileSaga(action) {
  try {
    yield put(setMainLoader(true))
    const staticFile = yield bridge?.sendBotEvent({
      method: BotFeatureMethod.ECHO_STATIC_FILE,
      params: {},
      files: [action.payload],
    })
    console.error(staticFile)

    yield put(setStaticFile(staticFile))

  } catch (e: any) {
    console.error('echoStaticFileSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* sendMenuSyncEventSaga() {
  try {
    yield put(setMenuResponse(null))
    const response = yield bridge.sendBotEvent({
      ...MENU_EVENT,
      sync_request: true,
    })
    yield put(setMenuResponse(response))
  } catch (e: any) {
    yield spawn(showToast, `sendMenuSyncEventSaga error ${e?.message}`)
    console.error('sendMenuSyncEvent error', e)
  }
}

export function* sendMenuAsyncEventSaga() {
  try {
    yield put(setMenuResponse(null))
    const response = yield bridge.sendBotEvent(MENU_EVENT)
    yield put(setMenuResponse(response))
  } catch (e: any) {
    yield spawn(showToast, `sendMenuAsyncEventSaga error ${e?.message}`)
    console.error('sendMenuAsyncEventSaga error', e)
  }
}
