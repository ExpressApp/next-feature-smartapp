import {
  BotFeature,
  BotFeatureMethod,
  ExpressFeature,
  ExpressFeatureMethod,
  ExpressFeatureName,
  InputId,
  InputLabel,
  InputType,
} from './types'

export const EXPRESS_NOTIFICATION_FEATURE = {
  method: 'notification',
  name: 'Express Notification',
}

export const OPEN_SMART_APP_META_FEATURE = {
  name: 'App Meta',
  method: 'open_smart_meta_app',
  field: 'openSmartAppMeta',
}

export const OPEN_FILE_FEATURE = {
  name: 'Open File',
  method: 'open_file',
}

export const REQUEST_LOCATION = {
  name: 'Request Location',
  method: 'request_location',
}

export const SCAN_QR_FEATURE = {
  name: 'Scan QR',
  method: 'scan_qr',
}

export const OPEN_WEB_PAGE_FEATURE = {
  name: 'Open Web Page',
  method: 'open-web-page',
}

export const REQUEST_SELF_PROFILE_FEATURE = {
  name: 'Request self profile',
  method: 'request-self-profile',
}

export const CLOSE_SMART_APP_FEATURE = {
  name: 'Close SmartApp',
  method: 'close-smartapp',
}

export const FILE_PROXY = {
  name: 'File proxy',
  method: 'file-proxy',
}

export const CONNECTION_STATUS = {
  name: 'Connection status',
  method: 'connection-status',
}

export const MENU_ITEM_MESSAGE_META = {
  name: 'Message meta from menu action',
  method: 'menu-item-message-meta',
}

export const MENU_EVENT: any = {
  method: 'menu',
  params: {
    text: 'menu',
  },
}

export const CREATE_DEEPLINK = {
  name: 'Create deeplink',
  method: 'create-deeplink',
}

export const IOS_SWIPE = {
  method: 'ios-swipe',
  name: 'iOS Swipe',
}

export const OPEN_CHAT_MESSAGE = {
  name: 'Open chat message',
  method: 'open-chat-message',
}

export const CLIENT_STORAGE = {
  name: 'Client storage',
  method: 'client-storage',
}

export const HANDLE_DEEPLINK_FEATURE = {
  name: 'Handle deeplink',
  method: 'handle-deeplink',
}

export const SEARCH_PHONEBOOK = {
  name: 'Search phonebook',
  method: 'search-phonebook',
}

export const UNREAD_COUNTER_FEATURE = {
  name: 'Unread counters',
  method: 'unread-counters',
}

export const SYNC_REQUEST_FEATURE = {
  name: 'Sync request',
  method: 'sync-request',
}

export const LOCALE_FEATURE = {
  name: 'Locale',
  method: 'locale',
}

export const LAYOUT_TYPE_FEATURE = {
  name: 'Layout size (Web)',
  method: 'layout-type',
}


export const INPUT_TYPE: Record<InputType, string> = {
  INPUT_TEXT: 'text',
  INPUT_NUMBER: 'number',
  FILE_PICKER: 'file',
  ARRAY_UUID: 'text',
  UUID: 'text',
}


export const EXPRESS_FEATURES: ExpressFeature[] = [
  {
    method: ExpressFeatureMethod.ADD_CONTACT,
    name: ExpressFeatureName.ADD_CONTACT,
    icon: "perm_contact_calendar",
    uiElements: [
      {
        id: InputId.PHONE,
        label: InputLabel.PHONE,
        type: InputType.INPUT_TEXT,
      },
      {
        id: InputId.NAME,
        label: InputLabel.NAME,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.GET_CONTACT,
    name: ExpressFeatureName.GET_CONTACT,
    icon: "perm_contact_calendar",
    uiElements: [
      {
        id: InputId.PHONE,
        label: InputLabel.PHONE,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.OPEN_CONTACT_CARD,
    name: ExpressFeatureName.OPEN_CONTACT_CARD,
    icon: "perm_contact_calendar",
    uiElements: [
      {
        id: InputId.USER_HUID,
        label: InputLabel.USER_HUID,
        type: InputType.UUID,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.CREATE_PERSONAL_CHAT,
    name: ExpressFeatureName.CREATE_PERSONAL_CHAT,
    icon: "chat_bubble_outline",
    uiElements: [
      {
        id: InputId.HUID,
        label: InputLabel.HUID,
        type: InputType.UUID,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.OPEN_GROUP_CHAT,
    name: ExpressFeatureName.OPEN_GROUP_CHAT,
    icon: "mark_chat_unread",
    uiElements: [
      {
        id: InputId.GROUP_CHAT_ID,
        label: InputLabel.GROUP_CHAT_ID,
        type: InputType.UUID,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.OPEN_SMARTAPP,
    name: ExpressFeatureName.OPEN_SMARTAPP,
    icon: "open_in_browser",
    uiElements: [
      {
        id: InputId.SMARTAPP_ID,
        label: InputLabel.SMARTAPP_ID,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.SEND_MESSAGE,
    name: ExpressFeatureName.SEND_MESSAGE,
    icon: "send",
    uiElements: [
      {
        id: InputId.MESSAGE,
        label: InputLabel.MESSAGE,
        type: InputType.INPUT_TEXT,
      },
      {
        id: InputId.GROUP_CHAT_ID,
        label: InputLabel.GROUP_CHAT_ID,
        type: InputType.UUID,
      },
      {
        id: InputId.USER_HUID,
        label: InputLabel.USER_HUID,
        type: InputType.UUID,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.SEND_BOT_COMMAND,
    name: ExpressFeatureName.SEND_BOT_COMMAND,
    icon: "send",
    uiElements: [
      {
        id: InputId.USER_HUID,
        label: InputLabel.USER_HUID,
        type: InputType.UUID,
      },
      {
        id: InputId.BODY,
        label: InputLabel.BODY,
        type: InputType.INPUT_TEXT,
      },
      {
        id: InputId.DATA,
        label: InputLabel.DATA,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
  {
    method: ExpressFeatureMethod.OPEN_CLIENT_SETTINGS,
    name: ExpressFeatureName.OPEN_CLIENT_SETTINGS,
    icon: "settings",
    uiElements: [],
  },
  {
    method: ExpressFeatureMethod.GET_CHATS,
    name: ExpressFeatureName.GET_CHATS,
    icon: "chat_bubble_outline",
    uiElements: [
      {
        id: InputId.FILTER,
        label: InputLabel.FILTER,
        type: InputType.INPUT_TEXT,
      },
    ],
  },
]

export const ECHO_STATIC_FILE_FEATURE: BotFeature = {
  name: 'Echo static file',
  method: BotFeatureMethod.ECHO_STATIC_FILE,
  uiElements: [{
    id: InputId.FILE,
    type: InputType.FILE_PICKER,
    label: InputLabel.FILE,
  }]
}

export const GUARANTEED_DELIVERY_FEATURE: BotFeature & { path: string } = {
  name: 'Echo with guaranteed delivery',
  method: BotFeatureMethod.ECHO,
  path: 'guaranteed-delivery',
  uiElements: [{
    id: InputId.TEXT,
    type: InputType.INPUT_TEXT,
    label: InputLabel.TEXT,
  }]
}

export const PERF_TEST_COUNTER = 10
export const HIGHLOAD_TEST_RPS_STEP = 1
export const HIGHLOAD_TEST_MEASURE_INTERVAL = 5000