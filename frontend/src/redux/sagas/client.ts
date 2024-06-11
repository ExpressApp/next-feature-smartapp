import {
  Bridge as bridge,
  ready,
  requestLocation,
  sendMessage,
  requestSelfProfile,
  closeSmartApp,
  getConnectionStatus,
  subscribeClientEvents,
  unsubscribeClientEvents,
  createDeeplink,
  openChatMessage,
  clientStorageSet,
  clientStorageGet,
  clientStorageRemove,
  clientStorageClear,
  handleDeeplink,
  searchCorporatePhonebook,
  searchLocalPhonebook,
  getUnreadCounter,
} from '@expressms/smartapp-sdk'
import { ClientEventMethod, ExpressMethodResponse, File } from '../../types'
import { call, put, take, spawn } from 'redux-saga/effects'
import {
  clientStorageGetActionType,
  clientStorageLoaded,
  clientStorageRemoveActionType,
  clientStorageSetActionType,
  connectionStatusChanged,
  createDeeplinkActionType,
  getUnreadCounterActionType,
  handleDeeplinkActionType,
  openChatMessageActionType,
  searchCorporatePhonebookActionType,
  searchLocalPhonebookActionType,
  sendExpressEventActionType,
  sendExpressEventSuccess,
  sendMessageExpressEventActionType,
  setConnectionStatus,
  setDeeplinkUrl,
  setLayoutType,
  setLocation,
  setMeta,
  setSelfProfile,
  setUnreadCounter,
  subscribeUnreadCounterActionType,
  unsubscribeUnreadCounterActionType,
  uploadFilesActionType,
  uploadFilesSuccess,
  uploadFileSuccess,
} from '../actions/client'
import { setMainLoader, setRedirectPath } from '../actions/ui'
import { OPEN_SMART_APP_META_FEATURE } from '../../constants'
import {
  ClientStorageGetResponse,
  CreateDeeplinkResponse,
  GetConnectionStatusResponse,
  GetLayoutTypeResponse,
  GetUnreadCounterResponse,
  STATUS,
  SearchLocalPhonebookResponse,
  StatusResponse,
  SubscriptionEventType,
} from '@expressms/smartapp-sdk/build/main/types'
import { eventChannel } from 'redux-saga'
import { showToast } from './ui'
import { getLayoutType } from '@expressms/smartapp-sdk/build/main/lib/client'

let connectionStatusChannel = null
let unreadCounterChannels = []
let layoutTypeChannel = null

export function* uploadFileSaga() {
  try {
    const response = yield bridge?.sendClientEvent({
      method: ClientEventMethod.UPLOAD_FILE,
      params: { type: '' },
    })

    if (!response.payload?.record) return

    const file: File = {
      ...response.payload.record,
    }

    yield put(uploadFileSuccess(file))
  } catch (e) {
    console.error(`uploadFileSaga error: ${e}`)
  }
}

export function* uploadFilesSaga({ payload: { type } }: uploadFilesActionType) {
  try {
    const response = yield bridge?.sendClientEvent({
      method: ClientEventMethod.UPLOAD_FILES,
      params: { type },
      timeout: 60 * 60 * 1000, // Waiting 1h for files upload
    })

    if (!response.payload.records.length) return

    const files: File[] = response.payload.records

    yield put(uploadFilesSuccess(files))
  } catch (e) {
    console.error(`uploadFilesSaga error: ${e}`)
  }
}

export function* requestLocationSaga() {
  try {
    yield put(setMainLoader(true))
    const response = yield requestLocation()

    if (response) {
      yield put(setLocation(response))
    }
  } catch (e) {
    console.error(`uploadFileSaga error: ${e}`)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* requestSelfProfileSaga() {
  try {
    yield put(setMainLoader(true))
    const response = yield requestSelfProfile()

    if (response) {
      yield put(setSelfProfile(response))
    }
  } catch (e) {
    console.error(`requestSelfProfileSaga error: ${e}`)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* sendExpressEventSaga(action: sendExpressEventActionType) {
  try {
    yield put(setMainLoader(true))

    const response: ExpressMethodResponse = yield bridge?.sendClientEvent(action.payload)

    yield put(sendExpressEventSuccess(response))
  } catch (e: any) {
    console.error('sendExpressEventSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* sendMessageExpressEventSaga(action: sendMessageExpressEventActionType) {
  try {
    yield put(setMainLoader(true))

    const response: ExpressMethodResponse = yield sendMessage(action.payload)

    yield put(sendExpressEventSuccess(response))
  } catch (e: any) {
    console.error('sendMessageExpressEventSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* sendExpressReadyEventSaga() {
  try {
    const response = yield ready(3000)
    const meta = response?.payload?.[OPEN_SMART_APP_META_FEATURE.field]
    const initialData = response?.payload?.initialData

    if (meta || initialData?.initiator) {
      bridge?.log?.({ response })
      yield put(setRedirectPath(`/${OPEN_SMART_APP_META_FEATURE.method}`))
      yield put(setMeta(response))
      return
    }

    setRedirectPath('/')
  } catch (e) {
    console.error('sendExpressReadyEventSaga', e)
  }
}

export function* closeSmartAppSaga() {
  try {
    yield closeSmartApp()
  } catch (e) {
    console.error(`closeSmartAppSaga error: ${e}`)
  }
}

export function* getConnectionStatusSaga() {
  try {
    const response: GetConnectionStatusResponse = yield getConnectionStatus()

    console.log(response)

    yield put(setConnectionStatus(response.payload.connectionStatus))
  } catch (e) {
    console.error(`getConnectionStatusSaga error: ${e}`)
  }
}

function addConnectionEventListener() {
  return eventChannel(emitter => {
    const connectionStatusCallback = (event: any) => {
      console.log('Subscription event', JSON.stringify(event))
      emitter(event.payload.connectionStatus)
    }

    subscribeClientEvents({
      eventType: SubscriptionEventType.CONNECTION_STATUS,
      callback: connectionStatusCallback,
    }).then(() => {
      console.log('Subscribed ' + SubscriptionEventType.CONNECTION_STATUS)
    })

    return () =>
      unsubscribeClientEvents({
        eventType: SubscriptionEventType.CONNECTION_STATUS,
        callback: connectionStatusCallback,
      })
  })
}

export function* subscribeConnectionStatusSaga() {
  try {
    connectionStatusChannel = yield call(addConnectionEventListener)

    while (true) {
      const connectionStatus = yield take(connectionStatusChannel)
      yield put(connectionStatusChanged(connectionStatus))
    }
  } catch (e) {
    console.error(`subscribeConnectionStatusSaga error: ${e}`)
  }
}

export function unsubscribeConnectionStatusSaga() {
  if (connectionStatusChannel) {
    connectionStatusChannel.close()
    connectionStatusChannel = null
  }
}

export function* createDeeplinkSaga({ payload: { appId, meta } }: createDeeplinkActionType) {
  try {
    const response: CreateDeeplinkResponse = yield createDeeplink(appId, meta)

    yield put(setDeeplinkUrl(response.payload.data?.deeplink))
  } catch (e) {
    console.error(`createDeeplinkSaga error: ${e}`)
  }
}

export function* openChatMessageSaga({ payload: { groupChatId, syncId } }: openChatMessageActionType) {
  try {
    yield openChatMessage({ groupChatId, syncId })
  } catch (e) {
    console.error(`openChatMessageSaga error: ${e}`)
  }
}

export function* clientStorageSetSaga({ payload: { key, value } }: clientStorageSetActionType) {
  try {
    const response: StatusResponse = yield clientStorageSet({ key, value })

    const text =
      response.payload.status === STATUS.SUCCESS
        ? 'Saved successfully'
        : `Error saving data to storage ${response.payload.errorCode}`

    yield spawn(showToast, text)
  } catch (e) {
    console.error(`clientStorageSetSaga error: ${e}`)
    yield spawn(showToast, `Error saving data to storage ${e.message}`)
  }
}

export function* clientStorageGetSaga({ payload: key }: clientStorageGetActionType) {
  try {
    const response: ClientStorageGetResponse = yield clientStorageGet({ key })

    if (response.payload.status !== STATUS.SUCCESS) {
      yield spawn(showToast, `Error getting data to storage ${response.payload.errorCode}`)
      return
    }

    yield put(clientStorageLoaded(response.payload.value))
  } catch (e) {
    yield spawn(showToast, `Error getting data to storage ${e.message}`)
    console.error(`clientStorageGetSaga error: ${e}`)
  }
}

export function* clientStorageRemoveSaga({ payload: key }: clientStorageRemoveActionType) {
  try {
    const response: StatusResponse = yield clientStorageRemove({ key })

    const text =
      response.payload.status === STATUS.SUCCESS
        ? 'Removed successfully'
        : `Error removing data to storage ${response.payload?.errorCode}`

    yield spawn(showToast, text)
  } catch (e) {
    yield spawn(showToast, `Error removing data from storage ${e.message}`)
    console.error(`clientStorageRemoveSaga error: ${e}`)
  }
}

export function* clientStorageClearSaga() {
  try {
    const response: StatusResponse = yield clientStorageClear()

    const text =
      response.payload.status === STATUS.SUCCESS
        ? 'Cleared successfully'
        : `Error clearing data in storage ${response.payload.errorCode}`

    yield spawn(showToast, text)
  } catch (e) {
    yield spawn(showToast, `Error clearing data in storage ${e.message}`)
    console.error(`clientStorageClearSaga error: ${e}`)
  }
}

export function* handleDeeplinkSaga({ payload: deeplink }: handleDeeplinkActionType) {
  try {
    const response: StatusResponse = yield handleDeeplink({ link: deeplink })

    const text =
      response.payload.status === STATUS.SUCCESS
        ? 'Deeplink handled successfully'
        : `Error handling deeplink ${response.payload.errorCode}`

    yield spawn(showToast, text)
  } catch (e) {
    yield spawn(showToast, `Error handling deeplink ${e?.message || e}`)
    console.error(`handleDeeplinkSaga error: ${e}`)
  }
}

export function* searchCorporatePhonebookSaga({ payload: filter }: searchCorporatePhonebookActionType) {
  try {
    const response = yield searchCorporatePhonebook({ filter })

    if (response.payload.status !== STATUS.SUCCESS) {
      yield spawn(showToast, `Error search corp phonebook ${response.payload.errorCode}`)
      return
    }

    yield put(sendExpressEventSuccess(response))
  } catch (e) {
    yield spawn(showToast, `Error search corp phonebook ${e?.message || e}`)
    console.error(`searchCorporatePhonebookSaga error: ${e}`)
  }
}

export function* searchLocalPhonebookSaga({ payload: filter }: searchLocalPhonebookActionType) {
  try {
    const response: SearchLocalPhonebookResponse = yield searchLocalPhonebook({ filter })

    if (response.payload.status !== STATUS.SUCCESS) {
      yield spawn(showToast, `Error search local phonebook ${response.payload.errorCode}`)
      return
    }

    yield put(sendExpressEventSuccess(response))
  } catch (e) {
    yield spawn(showToast, `Error search local phonebook ${e?.message || e}`)
    console.error(`searchLocalPhonebookSaga error: ${e}`)
  }
}

export function* getUnreadCounterSaga({ payload: { id, type } }: getUnreadCounterActionType) {
  try {
    const response: GetUnreadCounterResponse = yield getUnreadCounter({ id, type })

    if (response.payload.status === STATUS.ERROR) {
      yield spawn(showToast, `Error getting unread counter ${response.payload.errorCode}`)
      return
    }

    yield put(setUnreadCounter(response.payload.unreadCounter))
  } catch (e) {
    yield spawn(showToast, `Error getting unread counter ${e?.message || e}`)
    console.error(`getUnreadCounterSaga error: ${e}`)
  }
}

function addUreadCounterEventListener(id, type) {
  return eventChannel(emitter => {
    const unreadCounterCallback = (event: any) => {
      console.log('Subscription event', event)
      emitter({
        id: event.payload.source.id,
        type: event.payload.source.type,
        unreadCounter: event.payload.unreadCounter,
      })
    }

    subscribeClientEvents({
      eventType: SubscriptionEventType.UNREAD_COUNTER_CHANGE,
      callback: unreadCounterCallback,
      payload: { id, type },
    }).then((response) => {
      if (response.payload.status === STATUS.ERROR) {
        unsubscribeUnreadCounterSaga({ payload: { id, type } } as subscribeUnreadCounterActionType)
        showToast(`Error subscribing unread counter ${response.payload.errorCode}`)
        return
      }

      console.log('Subscribed ' + SubscriptionEventType.UNREAD_COUNTER_CHANGE)
    }).catch((e) => {
      unsubscribeUnreadCounterSaga({ payload: { id, type } } as subscribeUnreadCounterActionType)
      showToast(`Error subscribing unread counter ${e?.message || e}`)
      console.error(`Error subscribing unread counter ${e?.message || e}`)
    })

    return () => {
      unsubscribeUnreadCounterSaga({ payload: { id, type } } as subscribeUnreadCounterActionType)
      unsubscribeClientEvents({
        eventType: SubscriptionEventType.UNREAD_COUNTER_CHANGE,
        callback: unreadCounterCallback,
        payload: { id, type },
      })
    }
  })
}

export function* subscribeUnreadCounterSaga({ payload: { id, type } }: subscribeUnreadCounterActionType) {
  try {
    const channel = yield call(addUreadCounterEventListener, id, type)

    unreadCounterChannels.push({ id: `${type}-${id}`, channel })

    while (true) {
      const { id, type, unreadCounter } = yield take(channel)

      yield spawn(showToast, `Counter = ${unreadCounter} for ${type} = ${id}`)
    }
  } catch (e) {
    console.error(`subscribeUnreadCounterSaga error: ${e}`)
  }
}

export function unsubscribeUnreadCounterSaga({ payload: { id, type } }: unsubscribeUnreadCounterActionType) {
  const item = unreadCounterChannels.find(c => c.id === `${type}-${id}`)

  if (!item) return

  item.channel.close()
  
  const index = unreadCounterChannels.indexOf(item)
  unreadCounterChannels.splice(index, 1)
}

export function* getLayoutTypeSaga() {
  try {
    const response: GetLayoutTypeResponse = yield getLayoutType()

    if (response.payload.status === STATUS.ERROR) {
      yield spawn(showToast, `Error getting layout type ${response.payload.errorCode}`)
      return
    }

    yield put(setLayoutType(response.payload.layoutType))
  } catch (e) {
    yield spawn(showToast, `Error getting layout type ${e?.message || e}`)
    console.error(`getLayoutTypeSaga error: ${e}`)
  }
}

function addLayoutTypeListener() {
  return eventChannel(emitter => {
    const layoutTypeCallback = (event: any) => {
      console.log('Subscription event', JSON.stringify(event))
      emitter(event.payload.layoutType)
    }

    subscribeClientEvents({
      eventType: SubscriptionEventType.LAYOUT_TYPE,
      callback: layoutTypeCallback,
    }).then(() => {
      console.log('Subscribed ' + SubscriptionEventType.LAYOUT_TYPE)
    })

    return () =>
      unsubscribeClientEvents({
        eventType: SubscriptionEventType.LAYOUT_TYPE,
        callback: layoutTypeCallback,
      })
  })
}

export function* subscribeLayoutTypeSaga() {
  try {
    layoutTypeChannel = yield call(addLayoutTypeListener)

    while (true) {
      const layoutType = yield take(layoutTypeChannel)
      yield put(setLayoutType(layoutType))
    }
  } catch (e) {
    console.error(`subscribeLayoutTypeSaga error: ${e}`)
  }
}

export function unsubscribeLayoutTypeSaga() {
  if (layoutTypeChannel) {
    layoutTypeChannel.close()
    layoutTypeChannel = null
  }
}
