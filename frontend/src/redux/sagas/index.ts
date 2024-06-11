import { all, fork, takeEvery } from 'redux-saga/effects'
import { loadFeaturesSaga, toggleHighloadTestSaga, togglePerformanceTestSaga } from './ui'
import { echoStaticFileSaga, sendFeatureBotEventSaga, sendMenuAsyncEventSaga, sendMenuSyncEventSaga } from './bot'
import {
  closeSmartAppSaga,
  requestLocationSaga,
  requestSelfProfileSaga,
  sendExpressEventSaga,
  sendExpressReadyEventSaga,
  sendMessageExpressEventSaga,
  uploadFileSaga,
  uploadFilesSaga,
  getConnectionStatusSaga,
  subscribeConnectionStatusSaga,
  unsubscribeConnectionStatusSaga,
  createDeeplinkSaga,
  openChatMessageSaga,
  clientStorageGetSaga,
  clientStorageSetSaga,
  clientStorageRemoveSaga,
  clientStorageClearSaga,
  handleDeeplinkSaga,
  searchCorporatePhonebookSaga,
  searchLocalPhonebookSaga,
  getUnreadCounterSaga,
  subscribeUnreadCounterSaga,
  unsubscribeUnreadCounterSaga,
  getLayoutTypeSaga,
  subscribeLayoutTypeSaga,
  unsubscribeLayoutTypeSaga,
} from './client'
import {
  CLIENT_STORAGE_CLEAR,
  CLIENT_STORAGE_GET,
  CLIENT_STORAGE_REMOVE,
  CLIENT_STORAGE_SET,
  CLOSE_SMART_APP,
  CREATE_DEEPLINK,
  ECHO_STATIC_FILE,
  GET_CONNECTION_STATUS,
  GET_LAYOUT_TYPE,
  GET_UNREAD_COUNTER,
  HANDLE_DEEPLINK,
  OPEN_CHAT_MESSAGE,
  REQUEST_LOCATION,
  REQUEST_SELF_PROFILE,
  SEARCH_CORPORATE_PHONEBOOK,
  SEARCH_LOCAL_PHONEBOOK,
  SEND_EXPRESS_EVENT,
  SEND_EXPRESS_READY_EVENT,
  SEND_MESSAGE_EXPRESS_EVENT,
  SUBSCRIBE_CONNECTION_STATUS,
  SUBSCRIBE_LAYOUT_TYPE,
  SUBSCRIBE_UNREAD_COUNTER,
  UNSUBSCRIBE_CONNECTION_STATUS,
  UNSUBSCRIBE_LAYOUT_TYPE,
  UNSUBSCRIBE_UNREAD_COUNTER,
  UPLOAD_FILE,
  UPLOAD_FILES,
} from '../actions/client'
import { LOAD_FEATURES, SEND_FEATURE_BOT_EVENT, SEND_MENU_ASYNC_EVENT, SEND_MENU_SYNC_EVENT } from '../actions/bot'
import { rootEventsBusSaga } from './eventBus'
import { TOGGLE_HIGHLOAD_TEST, TOGGLE_PERFORMANCE_TEST } from '../actions/ui'

function* rootFeatureSmartAppSaga() {
  yield all([
    takeEvery(LOAD_FEATURES, loadFeaturesSaga),
    takeEvery(SEND_FEATURE_BOT_EVENT, sendFeatureBotEventSaga),
    takeEvery(ECHO_STATIC_FILE, echoStaticFileSaga),
    takeEvery(SEND_EXPRESS_EVENT, sendExpressEventSaga),
    takeEvery(SEND_MESSAGE_EXPRESS_EVENT, sendMessageExpressEventSaga),
    takeEvery(SEND_EXPRESS_READY_EVENT, sendExpressReadyEventSaga),
    takeEvery(UPLOAD_FILE, uploadFileSaga),
    takeEvery(UPLOAD_FILES, uploadFilesSaga),
    takeEvery(REQUEST_LOCATION, requestLocationSaga),
    takeEvery(REQUEST_SELF_PROFILE, requestSelfProfileSaga),
    takeEvery(CLOSE_SMART_APP, closeSmartAppSaga),
    takeEvery(GET_CONNECTION_STATUS, getConnectionStatusSaga),
    takeEvery(SUBSCRIBE_CONNECTION_STATUS, subscribeConnectionStatusSaga),
    takeEvery(UNSUBSCRIBE_CONNECTION_STATUS, unsubscribeConnectionStatusSaga),
    takeEvery(CREATE_DEEPLINK, createDeeplinkSaga),
    takeEvery(OPEN_CHAT_MESSAGE, openChatMessageSaga),
    takeEvery(CLIENT_STORAGE_GET, clientStorageGetSaga),
    takeEvery(CLIENT_STORAGE_SET, clientStorageSetSaga),
    takeEvery(CLIENT_STORAGE_REMOVE, clientStorageRemoveSaga),
    takeEvery(CLIENT_STORAGE_CLEAR, clientStorageClearSaga),
    takeEvery(HANDLE_DEEPLINK, handleDeeplinkSaga),
    takeEvery(SEARCH_CORPORATE_PHONEBOOK, searchCorporatePhonebookSaga),
    takeEvery(SEARCH_LOCAL_PHONEBOOK, searchLocalPhonebookSaga),
    takeEvery(GET_UNREAD_COUNTER, getUnreadCounterSaga),
    takeEvery(SUBSCRIBE_UNREAD_COUNTER, subscribeUnreadCounterSaga),
    takeEvery(UNSUBSCRIBE_UNREAD_COUNTER, unsubscribeUnreadCounterSaga),
    takeEvery(TOGGLE_PERFORMANCE_TEST, togglePerformanceTestSaga),
    takeEvery(SEND_MENU_ASYNC_EVENT, sendMenuAsyncEventSaga),
    takeEvery(SEND_MENU_SYNC_EVENT, sendMenuSyncEventSaga),
    takeEvery(GET_LAYOUT_TYPE, getLayoutTypeSaga),
    takeEvery(SUBSCRIBE_LAYOUT_TYPE, subscribeLayoutTypeSaga),
    takeEvery(UNSUBSCRIBE_LAYOUT_TYPE, unsubscribeLayoutTypeSaga),
    takeEvery(TOGGLE_HIGHLOAD_TEST, toggleHighloadTestSaga),
  ])
}

function* rootSaga() {
  yield all([
    fork(rootFeatureSmartAppSaga),
    fork(rootEventsBusSaga),
  ])
}

export default rootSaga
