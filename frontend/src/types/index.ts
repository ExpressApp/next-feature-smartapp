import { RouterState } from 'connected-react-router'

export enum EventType {
  SMARTAPP_RPC = 'smartapp_rpc',
  NOTIFICATION = 'notification',
}

export enum BotFeatureMethod {
  ECHO = 'echo',
  UPDATE_APP_COUNTER = 'update_app_counter',
  SEND_NOTIFICATION = 'send_notification',
  ECHO_FILE = 'echo_file',
  ECHO_FILES = 'echo_files',
  ECHO_STATIC_FILE = 'echo_static_file',
  SEARCH_USERS = 'search_users',
}

export enum ExpressFeatureMethod {
  ADD_CONTACT = 'add_contact',
  CREATE_PERSONAL_CHAT = 'create_personal_chat',
  SEND_MESSAGE = 'send_message',
  GET_CONTACT = 'get_contact',
  OPEN_SMARTAPP = 'open_smart_app',
  OPEN_CLIENT_SETTINGS = 'open_client_settings',
  GET_CHATS = 'get_chats',
  OPEN_GROUP_CHAT = 'open_group_chat',
  SEND_BOT_COMMAND = 'send_bot_command',
  OPEN_CONTACT_CARD = 'open_contact_card',
}

export enum Methods {
  BACK_PRESSED = 'back_pressed',
  ROUTING_CHANGED = 'routing_changed',
  CLEAN_CACHE = 'clean_cache',
  MOVE_TO_ROOT = 'move_to_root',
  IOS_SWIPE = 'ios_swipe',
}

export enum Path {
  ROOT = 'root',
  NESTED = 'nested',
}

export enum ExpressFeatureName {
  ADD_CONTACT = 'Add Contact',
  CREATE_PERSONAL_CHAT = 'Create Personal Chat',
  SEND_MESSAGE = 'Send Message to Group Chat or User',
  GET_CONTACT = 'Get Contact',
  OPEN_SMARTAPP = 'Open SmartApp',
  OPEN_CLIENT_SETTINGS = 'Open Client Settings',
  GET_CHATS = 'Get Chats',
  OPEN_GROUP_CHAT = 'Open Group Chat',
  SEND_BOT_COMMAND = 'Send Bot Command',
  OPEN_CONTACT_CARD = 'Open Contact Card',
}

export enum ClientEventMethod {
  UPLOAD_FILE = 'upload_file',
  UPLOAD_FILES = 'upload_files',
}

export type GeneratorFunction = Generator<any, any, any>

export interface AppEvent {
  ref?: string | null,
  type: string,
  payload: any,
  files: any[] | null,
}

export interface BotEvent {
  method: BotFeatureMethod | 'menu'
  params: any
  files?: File[]
  timeout?: number
}

export interface ExpressEvent {
  method: ExpressFeatureMethod
  params: any
}

export interface SendMessageActionPayload {
  userHuid: string | null
  groupChatId: string | null
  messageBody: string
  messageMeta?: {}
}

export enum InputId {
  TEXT = 'text',
  COUNT = 'count',
  DELAY = 'delay',
  FILE = 'file',
  FILES = 'files',
  HUIDS = 'huids',
  PHONE = 'phone',
  NAME = 'name',
  HUID = 'huid',
  SMARTAPP_ID = 'appId',
  MESSAGE = 'message',
  GROUP_CHAT_ID = 'groupChatId',
  USER_HUID = 'userHuid',
  FILTER = 'filter',
  BODY = 'body',
  DATA = 'data',
}

export enum InputLabel {
  TEXT = 'Text',
  COUNT = 'Count',
  DELAY = 'Delay',
  FILE = 'File',
  FILES = 'Files',
  HUIDS = 'Huids',
  PHONE = 'Phone',
  NAME = 'Name',
  HUID = 'Huid',
  SMARTAPP_ID = 'Smartapp ID',
  MESSAGE = 'Message',
  GROUP_CHAT_ID = 'Group chat id',
  USER_HUID = 'User huid',
  FILTER = 'Filter',
  BODY = 'Body',
  DATA = 'Data',
}

export enum InputType {
  INPUT_TEXT = 'INPUT_TEXT',
  INPUT_NUMBER = 'INPUT_NUMBER',
  FILE_PICKER = 'FILE_PICKER',
  ARRAY_UUID = 'ARRAY_UUID',
  UUID = 'UUID',
}

export interface Input {
  id: InputId | string
  label: InputLabel
  type: InputType
}

export interface BotFeature {
  method: BotFeatureMethod
  name: string
  uiElements: Input[]
  icon?: string
}

export type ExpressFeature = BotFeature | {
  method: ExpressFeatureMethod
  name: ExpressFeatureName
  uiElements: Input[]
  icon?: string
}

export type BotFeatures = BotFeature[] | null

export interface BotMethodResponse {
  type: EventType.SMARTAPP_RPC | string
  files: File[]
  payload: {
    result: string
    status: 'ok' | 'error'
  }
}

export type BotFeaturesResponse = BotMethodResponse & {
  payload: {
    result: BotFeature[]
  }
}

export interface ExpressMethodResponse {
  ref?: string
  payload: any
}

export interface ExpressNotification {
  ref: null
  type: 'notification'
  data: object
}

export interface File {
  type?: string
  file?: string
  fileMimeType?: string
  fileName?: string
  filePreview?: string
  filePreviewHeight?: number
  filePreviewWidth?: number
  fileSize: number
  fileHash?: string
  fileEncryptionAlgo?: string
  chunkSize?: number
  fileId?: any
  key?: object
}

export interface Location {
  latitude: string | null
  longitude: string | null
  timestamp: string | null
}

export interface SelfProfile {
  userHuid: string,
  name: string,
  avatar: string | null,
  avatarPreview: string | null,
  company: string | null,
  department: string | null,
  office: string | null,
  manager: string | null,
  managerHuid: string | null,
  email: string | null,
  phone: string | null,
  description: string | null,
  otherPhone: string | null,
  ip_phone: string | null,
  otherIpPhone: string | null,
}


export interface PerformanceResult {
  sync: number
  async: number
  eventNumber: string
}

export interface UIState {
  mainLoader: boolean
  redirectPath: string
  theme: string
  showIosSwipeToast: boolean
  performanceTest: {
    running: boolean
    results: Array<PerformanceResult>
    progress: number
  },
  highloadTest: {
    running: boolean
    requestRps: number
    responseRps: number
    responseTimeAvg: number
    progress: number
  }
}

export interface BotState {
  features: BotFeatures
  response: BotMethodResponse | null
  notifications: BotMethodResponse[] | null
  staticFile: object
  menuResponse: object | null
}

export interface ClientState {
  attachments: File[] | null
  response: ExpressMethodResponse | null
  meta: ExpressMethodResponse | null
  notifications: ExpressNotification[] | null
  location: Location | null
  selfProfile: SelfProfile | null
  connectionStatus: string | null
  subscribedConnectionStatus: string | null
  deeplinkUrl: string | null
  storageData: any
  unreadCounter: number
  layoutType: string | null
}

export interface AppState {
  ui: UIState
  bot: BotState
  client: ClientState
  router: RouterState
}
