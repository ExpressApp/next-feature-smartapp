import { all, call, select, spawn, take } from 'redux-saga/effects'
import { eventChannel, EventChannel } from 'redux-saga'
import { Bridge as bridge, routingChanged } from '@expressms/smartapp-sdk'
import { AppEvent, AppState, Methods } from '../../types'
import { history } from '../history'
import { showToast } from './ui'

export function subscribeClientEvents(): EventChannel<AppEvent> {
  return eventChannel(emit => {
    bridge?.onReceive(event => emit(event as any))
    return () => {}
  })
}

export function* watchClientEvents() {
  const channel: EventChannel<AppEvent> = yield call(subscribeClientEvents)

  while (true) {
    const event: AppEvent = yield take(channel)

    switch (event.type) {
      case Methods.CLEAN_CACHE:
      case Methods.MOVE_TO_ROOT:
        yield spawn(showToast, `Event ${event.type} received`)
        break
      case Methods.BACK_PRESSED:
        if (window.location.hash !== '#/') {
          window.location.hash = '#/'
        }
        break
      case Methods.IOS_SWIPE:
        const showIosSwipeToast = yield select((state: AppState) => state.ui.showIosSwipeToast)
        if (showIosSwipeToast) yield spawn(showToast, 'Event ios_swipe received')
        break
      default:
        break
    }
  }
}

export function subscribeHistoryEvents(): EventChannel<Location> {
  return eventChannel(emit => {
    history.listen(event => emit(event as any))
    return () => {}
  })
}

function* watchHistoryEvents() {
  const channel: EventChannel<Location> = yield call(subscribeHistoryEvents)

  while (true) {
    const event: Location = yield take(channel)

    yield spawn(handleRoutingChanged, event)
  }
}

export function* handleRoutingChanged(event) {
  try {
    const isRoot = event.pathname === '/'

    yield routingChanged(isRoot)
  } catch (e) {
    // Not all platforms return response for routing_changed event
  }
}

export function* rootEventsBusSaga() {
  yield all([watchClientEvents(), watchHistoryEvents()])
}
