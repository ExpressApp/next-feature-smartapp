import { createAction } from 'redux-actions'
import {
  ExpressEvent,
  ExpressMethodResponse,
  ExpressNotification,
  File,
  Location,
  SelfProfile,
  SendMessageActionPayload,
} from '../../types'
import { SubscriptionPayload } from '@expressms/smartapp-sdk/build/main/types'
import { StorageValueType } from '@expressms/smartapp-sdk/build/main/types'

export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS'
export const UPLOAD_FILES = 'UPLOAD_FILES'
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS'
export const REMOVE_FILE = 'REMOVE_FILE'
export const REMOVE_FILE_SUCCESS = 'REMOVE_FILE_SUCCESS'
export const RESET_ATTACHMENTS = 'RESET_ATTACHMENTS'
export const SEND_EXPRESS_EVENT = 'SEND_EXPRESS_EVENT'
export const SEND_MESSAGE_EXPRESS_EVENT = 'SEND_MESSAGE_EXPRESS_EVENT'
export const SEND_EXPRESS_EVENT_SUCCESS = 'SEND_EXPRESS_EVENT_SUCCESS'
export const SET_EXPRESS_NOTIFICATION_SUCCESS = 'SET_NOTIFICATION_SUCCESS'
export const RESET_EXPRESS_NOTIFICATION_SUCCESS = 'RESET_EXPRESS_NOTIFICATION_SUCCESS'
export const RESET_EXPRESS_RESPONSE = 'RESET_EXPRESS_RESPONSE'
export const SEND_EXPRESS_READY_EVENT = 'SEND_EXPRESS_READY_EVENT'
export const SET_META = 'SET_META'
export const ECHO_STATIC_FILE = 'ECHO_STATIC_FILE'
export const REQUEST_LOCATION = 'REQUEST_LOCATION'
export const SET_LOCATION = 'SET_LOCATION'
export const REQUEST_SELF_PROFILE = 'REQUEST_SELF_PROFILE'
export const SET_SELF_PROFILE = 'SET_SELF_PROFILE'
export const CLOSE_SMART_APP = 'CLOSE_SMART_APP'
export const GET_CONNECTION_STATUS = 'GET_CONNECTION_STATUS'
export const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS'
export const SUBSCRIBE_CONNECTION_STATUS = 'SUBSCRIBE_CONNECTION_STATUS'
export const UNSUBSCRIBE_CONNECTION_STATUS = 'UNSUBSCRIBE_CONNECTION_STATUS'
export const CONNECTION_STATUS_CHANGED = 'CONNECTION_STATUS_CHANGED'
export const CREATE_DEEPLINK = 'CREATE_DEEPLINK'
export const SET_DEEPLINK_URL = 'SET_DEEPLINK_URL'
export const OPEN_CHAT_MESSAGE = 'OPEN_CHAT_MESSAGE'
export const CLIENT_STORAGE_SET = 'CLIENT_STORAGE_SET'
export const CLIENT_STORAGE_GET = 'CLIENT_STORAGE_GET'
export const CLIENT_STORAGE_LOADED = 'CLIENT_STORAGE_LOADED'
export const CLIENT_STORAGE_REMOVE = 'CLIENT_STORAGE_REMOVE'
export const CLIENT_STORAGE_CLEAR = 'CLIENT_STORAGE_CLEAR'
export const HANDLE_DEEPLINK = 'HANDLE_DEEPLINK'
export const SEARCH_CORPORATE_PHONEBOOK = 'SEARCH_CORPORATE_PHONEBOOK'
export const SEARCH_LOCAL_PHONEBOOK = 'SEARCH_LOCAL_PHONEBOOK'
export const GET_UNREAD_COUNTER = 'GET_UNREAD_COUNTER'
export const SET_UNREAD_COUNTER = 'SET_UNREAD_COUNTER'
export const SUBSCRIBE_UNREAD_COUNTER = 'SUBSCRIBE_UNREAD_COUNTER'
export const UNSUBSCRIBE_UNREAD_COUNTER = 'UNSUBSCRIBE_UNREAD_COUNTER'
export const GET_LAYOUT_TYPE = 'GET_LAYOUT_TYPE'
export const SET_LAYOUT_TYPE = 'SET_LAYOUT_TYPE'
export const SUBSCRIBE_LAYOUT_TYPE = 'SUBSCRIBE_LAYOUT_TYPE'
export const UNSUBSCRIBE_LAYOUT_TYPE = 'UNSUBSCRIBE_LAYOUT_TYPE'

export const uploadFile = createAction(UPLOAD_FILE)
export const uploadFileSuccess = createAction(UPLOAD_FILE_SUCCESS, (file: File) => file)
export const uploadFiles = createAction(UPLOAD_FILES, (type: string = '') => ({ type }))
export const uploadFilesSuccess = createAction(UPLOAD_FILES_SUCCESS, (files: File[]) => files)
export const removeFile = createAction(REMOVE_FILE, (id: number) => id)
export const removeFileSuccess = createAction(REMOVE_FILE_SUCCESS, (id: number) => id)
export const resetAttachments = createAction(RESET_ATTACHMENTS)
export const sendExpressEvent = createAction(SEND_EXPRESS_EVENT, (expressEvent: ExpressEvent) => expressEvent)
export const sendMessageExpressEvent = createAction(
  SEND_MESSAGE_EXPRESS_EVENT,
  (payload: SendMessageActionPayload) => payload
)
export const sendExpressEventSuccess = createAction(
  SEND_EXPRESS_EVENT_SUCCESS,
  (response: ExpressMethodResponse | null) => response
)
export const setExpressNotificationSuccess = createAction(
  SET_EXPRESS_NOTIFICATION_SUCCESS,
  (notification: ExpressNotification | null) => notification
)
export const resetExpressNotificationSuccess = createAction(RESET_EXPRESS_NOTIFICATION_SUCCESS)
export const setMeta = createAction(SET_META, (meta: ExpressMethodResponse | null) => meta)
export const resetExpressResponse = createAction(RESET_EXPRESS_RESPONSE)
export const sendReadyEvent = createAction(SEND_EXPRESS_READY_EVENT)
export const setLocation = createAction(SET_LOCATION, (location: Location) => location)
export const requestLocation = createAction(REQUEST_LOCATION)
export const echoStaticFile = createAction(ECHO_STATIC_FILE)
export const requestSelfProfile = createAction(REQUEST_SELF_PROFILE)
export const setSelfProfile = createAction(SET_SELF_PROFILE, (selfProfile: SelfProfile) => selfProfile)
export const closeSmartApp = createAction(CLOSE_SMART_APP)
export const getConnectionStatus = createAction(GET_CONNECTION_STATUS)
export const setConnectionStatus = createAction(SET_CONNECTION_STATUS, (connectionStatus: string) => connectionStatus)
export const subscribeConnectionStatus = createAction(SUBSCRIBE_CONNECTION_STATUS)
export const unsubscribeConnectionStatus = createAction(UNSUBSCRIBE_CONNECTION_STATUS)
export const subscribeUnreadCounter = createAction(SUBSCRIBE_UNREAD_COUNTER, (id: string, type: SubscriptionPayload['type']) => ({
  id,
  type,
}))
export const unsubscribeUnreadCounter = createAction(UNSUBSCRIBE_UNREAD_COUNTER, (id: string, type: SubscriptionPayload['type']) => ({
  id,
  type,
}))
export const connectionStatusChanged = createAction(
  CONNECTION_STATUS_CHANGED,
  (connectionStatus: string) => connectionStatus
)
export const createDeeplink = createAction(
  CREATE_DEEPLINK,
  (appId: string, meta: Array<{ key: string; value: null | boolean | string | number }>) => ({
    appId,
    meta,
  })
)
export const setDeeplinkUrl = createAction(SET_DEEPLINK_URL, (deeplinkUrl: string) => deeplinkUrl)
export const openChatMessage = createAction(
  OPEN_CHAT_MESSAGE,
  ({ groupChatId, syncId }: { groupChatId: string; syncId: string }) => ({
    groupChatId,
    syncId,
  })
)
// TODO: fixme
export const clientStorageSet = createAction(CLIENT_STORAGE_SET, (key: string, value: StorageValueType) => ({
  key,
  value,
}))
export const clientStorageGet = createAction(CLIENT_STORAGE_GET, (key: string) => key)
export const clientStorageLoaded = createAction(CLIENT_STORAGE_LOADED, (storageData: any) => storageData)
export const clientStorageRemove = createAction(CLIENT_STORAGE_REMOVE, (key: string) => key)
export const clientStorageClear = createAction(CLIENT_STORAGE_CLEAR)
export const handleDeeplink = createAction(HANDLE_DEEPLINK, (deeplink: string) => deeplink)
export const searchCorporatePhonebook = createAction(SEARCH_CORPORATE_PHONEBOOK, (filter: string) => filter)
export const searchLocalPhonebook = createAction(SEARCH_LOCAL_PHONEBOOK, (filter: string) => filter)
export const getUnreadCounter = createAction(GET_UNREAD_COUNTER, (id: string, type: SubscriptionPayload['type']) => ({
  id,
  type,
}))
export const setUnreadCounter = createAction(SET_UNREAD_COUNTER, (counter: number) => counter)
export const getLayoutType = createAction(GET_LAYOUT_TYPE)
export const setLayoutType = createAction(SET_LAYOUT_TYPE, (layoutType: string) => layoutType)
export const subscribeLayoutType = createAction(SUBSCRIBE_LAYOUT_TYPE)
export const unsubscribeLayoutType = createAction(UNSUBSCRIBE_LAYOUT_TYPE)


export type uploadFileActionType = ReturnType<typeof uploadFile>
export type uploadFileSuccessActionType = ReturnType<typeof uploadFileSuccess>
export type uploadFilesActionType = ReturnType<typeof uploadFiles>
export type uploadFilesSuccessActionType = ReturnType<typeof uploadFilesSuccess>
export type removeFileActionType = ReturnType<typeof removeFile>
export type removeFileSuccessActionType = ReturnType<typeof removeFileSuccess>
export type sendExpressEventActionType = ReturnType<typeof sendExpressEvent>
export type sendMessageExpressEventActionType = ReturnType<typeof sendMessageExpressEvent>
export type sendExpressEventSuccessActionType = ReturnType<typeof sendExpressEventSuccess>
export type setExpressNotificationSuccessActionType = ReturnType<typeof setExpressNotificationSuccess>
export type setMetaActionType = ReturnType<typeof setMeta>
export type setLocationActionType = ReturnType<typeof setLocation>
export type setSelfProfileType = ReturnType<typeof setSelfProfile>
export type setConnectionStatusType = ReturnType<typeof setConnectionStatus>
export type connectionStatusChangedType = ReturnType<typeof connectionStatusChanged>
export type setDeeplinkUrlType = ReturnType<typeof setDeeplinkUrl>
export type createDeeplinkActionType = ReturnType<typeof createDeeplink>
export type openChatMessageActionType = ReturnType<typeof openChatMessage>
export type clientStorageLoadedActionType = ReturnType<typeof clientStorageLoaded>
export type clientStorageSetActionType = ReturnType<typeof clientStorageSet>
export type clientStorageGetActionType = ReturnType<typeof clientStorageGet>
export type clientStorageRemoveActionType = ReturnType<typeof clientStorageRemove>
export type handleDeeplinkActionType = ReturnType<typeof handleDeeplink>
export type searchCorporatePhonebookActionType = ReturnType<typeof searchCorporatePhonebook>
export type searchLocalPhonebookActionType = ReturnType<typeof searchLocalPhonebook>
export type getUnreadCounterActionType = ReturnType<typeof getUnreadCounter>
export type setUnreadCounterActionType = ReturnType<typeof setUnreadCounter>
export type subscribeUnreadCounterActionType = ReturnType<typeof subscribeUnreadCounter>
export type unsubscribeUnreadCounterActionType = ReturnType<typeof unsubscribeUnreadCounter>
export type getLayoutTypeActionType = ReturnType<typeof getLayoutType>
export type setLayoutTypeActionType = ReturnType<typeof setLayoutType>
export type subscribeLayoutTypeActionType = ReturnType<typeof subscribeLayoutType>
export type unsubscribeLayoutTypeActionType = ReturnType<typeof unsubscribeLayoutType>
