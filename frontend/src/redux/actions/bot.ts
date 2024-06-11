import { createAction } from 'redux-actions'
import { BotEvent, BotFeatures, BotMethodResponse, ExpressMethodResponse, File } from '../../types'

export const LOAD_FEATURES = 'LOAD_FEATURES'
export const LOAD_FEATURES_SUCCESS = 'LOAD_FEATURES_SUCCESS'
export const RESET_RESPONSE = 'RESET_RESPONSE'
export const SEND_FEATURE_BOT_EVENT = 'SEND_FEATURE_BOT_EVENT'
export const SEND_FEATURE_BOT_EVENT_SUCCESS = 'SEND_FEATURE_BOT_EVENT_SUCCESS'
export const SET_STATIC_FILE = 'SET_STATIC_FILE'
export const ECHO_STATIC_FILE = 'ECHO_STATIC_FILE'
export const SEND_MENU_SYNC_EVENT = 'SEND_MENU_SYNC_EVENT'
export const SEND_MENU_ASYNC_EVENT = 'SEND_MENU_ASYNC_EVENT'
export const SET_MENU_RESPONSE = 'SET_MENU_RESPONSE'

export const loadFeatures = createAction(LOAD_FEATURES, () => {
})
export const loadFeaturesSuccess = createAction(LOAD_FEATURES_SUCCESS, (features: BotFeatures) => features)
export const resetFeatures = createAction(RESET_RESPONSE, () => {
})
export const sendFeatureBotEvent = createAction(SEND_FEATURE_BOT_EVENT, (botEvent: BotEvent) => botEvent)
export const sendFeatureBotEventSuccess = createAction(
  SEND_FEATURE_BOT_EVENT_SUCCESS,
  (response: BotMethodResponse | ExpressMethodResponse | null) => response,
)
export const setStaticFile = createAction(SET_STATIC_FILE, (staticFile: any) => staticFile)
export const echoStaticFile = createAction(ECHO_STATIC_FILE, (file: File) => file)
export const sendMenuSyncEvent = createAction(SEND_MENU_SYNC_EVENT)
export const sendMenuAsyncEvent = createAction(SEND_MENU_ASYNC_EVENT)
export const setMenuResponse = createAction(SET_MENU_RESPONSE, (response: object) => response)

export type loadFeaturesSuccessActionType = ReturnType<typeof loadFeaturesSuccess>
export type sendFeatureBotEventSuccessActionType = ReturnType<typeof sendFeatureBotEventSuccess>
export type setStaticFileActionType = ReturnType<typeof setStaticFile>
export type setMenuResponseActionType = ReturnType<typeof setMenuResponse>
