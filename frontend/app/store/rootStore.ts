import { AddContactStore } from '../modules/add-contact/add-contact.store'
import { AppStore } from '../modules/app/app.store'
import { CloseSmartAppStore } from '../modules/close-smartapp/close-smartapp.store'
import { FeaturesStore } from '../modules/features-list/features.store'
import { LayoutTypeStore } from '../modules/layout-type/layout-type.store'
import { SearchPhonebookStore } from '../modules/search-phonebook/search-phonebook.store'
import { ToastStore } from '../modules/toast/toast.store'
import { GetContactStore } from '../modules/get-contact/get-contact.store'
import { OpenContactStore } from '../modules/open-contact/open-contact.store'
import { CreatePersonalChatStore } from '../modules/create-personal-chat/create-personal-chat.store'
import { OpenGroupChatChatStore } from '../modules/open-group-chat/open-group-chat.store'
import { GetChatsStore } from '../modules/get-chats/get-chats.store'
import { OpenSmartAppStore } from '../modules/open-smartapp/open-smartapp.store'
import { SendMessageStore } from '../modules/send-message/send-message.store'
import { OpenSettingsStore } from '../modules/open-settings/open-settings.store'
import { GetLocationStore } from '../modules/get-location/get-location.store'
import { ConnectionStatusStore } from '../modules/connection-status/connection-status.store'
import { CreateDeeplinkStore } from '../modules/create-deeplink/create-deeplink.store'
import { IosSwipeStore } from '../modules/ios-swipe/ios-swipe.store'
import { OpenChatMessageStore } from '../modules/open-chat-message/open-chat-message.store'
import { HandleDeeplinkStore } from '../modules/handle-deeplink/handle-deeplink.store'
import { UnreadCountersStore } from '../modules/unread-counters/unread-counters.store'
import { ClientStorageStore } from '../modules/client-storage/client-storage.store'
import { RequestSelfProfileStore } from '../modules/request-self-profile/request-self-profile.store'
import { SyncRequestStore } from '../modules/sync-request/sync-request.store'
import { HighLoadStore } from '../modules/sync-request/highload.store'
import { ThemeStore } from '../modules/theme/theme.store'
import { InitialDataStore } from '../modules/initial-data/initial-data.store'
import { GuaranteedDeliveryStore } from '../modules/guaranteed-delivery/guaranteed-delivery.store'
import { BotCommandStore } from '../modules/bot-command/bot-command.store'
import { MaxFileSizeStore } from '../modules/max-file-size/max-file-size.store'
import { SendBotCommandStore } from '../modules/send-bot-command/send-bot-command.store'
import { HideLogsStore } from '../modules/hide-logs/hide-logs.store'
import { CleanCacheStore } from '../modules/clean-cache/clean-cache.store'
import { AntimalwareStore } from '../modules/antimalware/antimalware.store'
import { AppVisibilityStore } from '../modules/app-visibility/app-visibility.store'

export class RootStore {
  appStore: AppStore
  closeSmartAppStore: CloseSmartAppStore
  featuresStore: FeaturesStore
  toastStore: ToastStore
  layoutTypeStore: LayoutTypeStore
  searchPhonebookStore: SearchPhonebookStore
  addContactStore: AddContactStore
  getContactStore: GetContactStore
  openContactStore: OpenContactStore
  createPersonalChatStore: CreatePersonalChatStore
  openGroupChatChatStore: OpenGroupChatChatStore
  getChatsStore: GetChatsStore
  openSmartAppStore: OpenSmartAppStore
  sendMessageStore: SendMessageStore
  openSettingsStore: OpenSettingsStore
  getLocationStore: GetLocationStore
  connectionStatusStore: ConnectionStatusStore
  createDeeplinkStore: CreateDeeplinkStore
  iosSwipeStore: IosSwipeStore
  openChatMessageStore: OpenChatMessageStore
  handleDeeplinkStore: HandleDeeplinkStore
  unreadCountersStore: UnreadCountersStore
  clientStorageStore: ClientStorageStore
  requestSelfProfileStore: RequestSelfProfileStore
  syncRequestStore: SyncRequestStore
  highLoadStore: HighLoadStore
  themeStore: ThemeStore
  initialDataStore: InitialDataStore
  guaranteedDeliveryStore: GuaranteedDeliveryStore
  botCommandStore: BotCommandStore
  maxFileSizeStore: MaxFileSizeStore
  sendBotCommandStore: SendBotCommandStore
  hideLogsStore: HideLogsStore
  cleanCacheStore: CleanCacheStore
  antimalwareStore: AntimalwareStore
  appVisibilityStore: AppVisibilityStore

  constructor() {
    this.appStore = new AppStore(this)
    this.closeSmartAppStore = new CloseSmartAppStore(this)
    this.featuresStore = new FeaturesStore(this)
    this.toastStore = new ToastStore(this)
    this.layoutTypeStore = new LayoutTypeStore(this)
    this.searchPhonebookStore = new SearchPhonebookStore(this)
    this.addContactStore = new AddContactStore(this)
    this.getContactStore = new GetContactStore(this)
    this.openContactStore = new OpenContactStore(this)
    this.createPersonalChatStore = new CreatePersonalChatStore(this)
    this.openGroupChatChatStore = new OpenGroupChatChatStore(this)
    this.getChatsStore = new GetChatsStore(this)
    this.openSmartAppStore = new OpenSmartAppStore(this)
    this.sendMessageStore = new SendMessageStore(this)
    this.openSettingsStore = new OpenSettingsStore(this)
    this.getLocationStore = new GetLocationStore(this)
    this.connectionStatusStore = new ConnectionStatusStore(this)
    this.createDeeplinkStore = new CreateDeeplinkStore(this)
    this.iosSwipeStore = new IosSwipeStore(this)
    this.openChatMessageStore = new OpenChatMessageStore(this)
    this.handleDeeplinkStore = new HandleDeeplinkStore(this)
    this.unreadCountersStore = new UnreadCountersStore(this)
    this.clientStorageStore = new ClientStorageStore(this)
    this.requestSelfProfileStore = new RequestSelfProfileStore(this)
    this.syncRequestStore = new SyncRequestStore(this)
    this.highLoadStore = new HighLoadStore(this)
    this.themeStore = new ThemeStore(this)
    this.initialDataStore = new InitialDataStore(this)
    this.guaranteedDeliveryStore = new GuaranteedDeliveryStore(this)
    this.botCommandStore = new BotCommandStore(this)
    this.maxFileSizeStore = new MaxFileSizeStore(this)
    this.sendBotCommandStore = new SendBotCommandStore(this)
    this.hideLogsStore = new HideLogsStore(this)
    this.cleanCacheStore = new CleanCacheStore(this)
    this.antimalwareStore = new AntimalwareStore(this)
    this.appVisibilityStore = new AppVisibilityStore(this)
  }
}
