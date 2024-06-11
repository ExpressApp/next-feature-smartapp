import { handleActions } from 'redux-actions'
import { BotState } from '../../types'
import {
  LOAD_FEATURES_SUCCESS,
  loadFeaturesSuccessActionType,
  RESET_RESPONSE,
  SEND_FEATURE_BOT_EVENT_SUCCESS,
  SET_MENU_RESPONSE,
  SET_STATIC_FILE,
  setMenuResponseActionType,
  setStaticFileActionType,
} from '../actions/bot'

const initialState: BotState = {
  features: null,
  response: null,
  notifications: null,
  staticFile: null,
  menuResponse: null,
}

const reducers = {
  [LOAD_FEATURES_SUCCESS]: (
    state: BotState, { payload: features }: loadFeaturesSuccessActionType,
  ): BotState => ({
    ...state,
    features,
  }),
  [SEND_FEATURE_BOT_EVENT_SUCCESS]: (state: BotState, { payload: response }: any): BotState => ({
    ...state,
    response,
  }),
  [RESET_RESPONSE]: (state: BotState): BotState => ({
    ...state,
    response: null,
  }),
  [SET_STATIC_FILE]: (
    state: BotState, { payload: staticFile }: setStaticFileActionType
  ): BotState => ({
    ...state,
    staticFile,
  }),
  [SET_MENU_RESPONSE]: (
    state: BotState, { payload: menuResponse }: setMenuResponseActionType
  ): BotState => ({
    ...state,
    menuResponse,
  }),
}

export const bot = handleActions(reducers, initialState)
