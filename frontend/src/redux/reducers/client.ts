import { handleActions } from 'redux-actions'
import { ClientState } from '../../types'

import {
  REMOVE_FILE_SUCCESS,
  removeFileSuccessActionType,
  RESET_ATTACHMENTS,
  RESET_EXPRESS_NOTIFICATION_SUCCESS,
  RESET_EXPRESS_RESPONSE,
  SEND_EXPRESS_EVENT_SUCCESS,
  sendExpressEventSuccessActionType,
  SET_EXPRESS_NOTIFICATION_SUCCESS,
  SET_LOCATION,
  SET_META,
  SET_SELF_PROFILE,
  setExpressNotificationSuccessActionType,
  setLocationActionType,
  setMetaActionType,
  setSelfProfileType,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILES_SUCCESS,
  uploadFilesSuccessActionType,
  uploadFileSuccessActionType,
  SET_CONNECTION_STATUS,
  setConnectionStatusType,
  CONNECTION_STATUS_CHANGED,
  connectionStatusChangedType,
  SET_DEEPLINK_URL,
  setDeeplinkUrlType,
  CLIENT_STORAGE_LOADED,
  clientStorageLoadedActionType,
  SET_UNREAD_COUNTER,
  setUnreadCounterActionType,
  SET_LAYOUT_TYPE,
  setLayoutTypeActionType,
} from '../actions/client'

const initialState: ClientState = {
  attachments: null,
  response: null,
  meta: null,
  notifications: [],
  location: null,
  selfProfile: null,
  connectionStatus: null,
  subscribedConnectionStatus: null,
  deeplinkUrl: null,
  storageData: '',
  unreadCounter: -1,
  layoutType: null
}

const reducers = {
  [UPLOAD_FILE_SUCCESS]: (state: ClientState, { payload: file }: uploadFileSuccessActionType): ClientState => ({
    ...state,
    attachments: [file],
  }),
  [UPLOAD_FILES_SUCCESS]: (state: ClientState, { payload: files }: uploadFilesSuccessActionType): ClientState => ({
    ...state,
    attachments: [...files],
  }),
  [REMOVE_FILE_SUCCESS]: (state: ClientState, { payload: id }: removeFileSuccessActionType): ClientState => ({
    ...state,
    attachments: state.attachments.filter(attachment => attachment.fileId !== id),
  }),
  [RESET_ATTACHMENTS]: (state: ClientState): ClientState => ({
    ...state,
    attachments: null,
  }),
  [SET_EXPRESS_NOTIFICATION_SUCCESS]: (
    state: ClientState,
    { payload }: setExpressNotificationSuccessActionType
  ): ClientState => ({
    ...state,
    notifications: [payload, ...state.notifications],
  }),
  [RESET_EXPRESS_NOTIFICATION_SUCCESS]: (state: ClientState): ClientState => ({
    ...state,
    notifications: [],
  }),
  [SEND_EXPRESS_EVENT_SUCCESS]: (state: ClientState, response: sendExpressEventSuccessActionType): ClientState => ({
    ...state,
    response,
  }),
  [RESET_EXPRESS_RESPONSE]: (state: ClientState): ClientState => ({
    ...state,
    response: null,
  }),
  [SET_META]: (state: ClientState, { payload }: setMetaActionType): ClientState => ({
    ...state,
    meta: payload,
  }),
  [SET_LOCATION]: (state: ClientState, { payload }: setLocationActionType): ClientState => ({
    ...state,
    location: payload,
  }),
  [SET_SELF_PROFILE]: (state: ClientState, { payload }: setSelfProfileType): ClientState => ({
    ...state,
    selfProfile: payload,
  }),
  [SET_CONNECTION_STATUS]: (state: ClientState, { payload }: setConnectionStatusType): ClientState => ({
    ...state,
    connectionStatus: payload,
  }),
  [CONNECTION_STATUS_CHANGED]: (state: ClientState, { payload }: connectionStatusChangedType): ClientState => ({
    ...state,
    subscribedConnectionStatus: payload,
  }),
  [SET_DEEPLINK_URL]: (state: ClientState, { payload }: setDeeplinkUrlType): ClientState => ({
    ...state,
    deeplinkUrl: payload,
  }),
  [CLIENT_STORAGE_LOADED]: (state: ClientState, { payload }: clientStorageLoadedActionType): ClientState => ({
    ...state,
    storageData: payload,
  }),
  [SET_UNREAD_COUNTER]: (state: ClientState, { payload }: setUnreadCounterActionType): ClientState => ({
    ...state,
    unreadCounter: payload,
  }),
  [SET_LAYOUT_TYPE]: (state: ClientState, { payload }: setLayoutTypeActionType): ClientState => ({
    ...state,
    layoutType: payload,
  }),
}

export const client = handleActions<ClientState, any>(reducers, initialState)
