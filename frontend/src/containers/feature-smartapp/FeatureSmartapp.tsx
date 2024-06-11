import './FeatureSmartapp.scss'
import 'material-icons/iconfont/material-icons.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getFeaturesMenu } from '../../redux/selectors/bot'
import { Link, Route, Switch, HashRouter } from 'react-router-dom'
import FeaturePage from '../feature-page/FeaturePage'
import { loadFeatures } from '../../redux/actions/bot'
import { ReactComponent as BotxIcon } from '../../assets/botx-icon.svg'
import 'react-toastify/dist/ReactToastify.css'
import {
  CLIENT_STORAGE,
  CLOSE_SMART_APP_FEATURE,
  CONNECTION_STATUS,
  CREATE_DEEPLINK,
  ECHO_STATIC_FILE_FEATURE,
  EXPRESS_FEATURES,
  EXPRESS_NOTIFICATION_FEATURE,
  FILE_PROXY,
  GUARANTEED_DELIVERY_FEATURE,
  HANDLE_DEEPLINK_FEATURE,
  IOS_SWIPE,
  LAYOUT_TYPE_FEATURE,
  LOCALE_FEATURE,
  MENU_ITEM_MESSAGE_META,
  OPEN_CHAT_MESSAGE,
  OPEN_FILE_FEATURE,
  OPEN_SMART_APP_META_FEATURE,
  OPEN_WEB_PAGE_FEATURE,
  REQUEST_LOCATION,
  REQUEST_SELF_PROFILE_FEATURE,
  SCAN_QR_FEATURE,
  SEARCH_PHONEBOOK,
  SYNC_REQUEST_FEATURE,
  UNREAD_COUNTER_FEATURE,
} from '../../constants'
import ExpressNotifications from '../../components/express-notifications/ExpressNotifications'
import MetaPage from '../../components/meta-page/MetaPage'
import { getRedirectPath } from '../../redux/selectors/ui'
import { history } from '../../redux/history'
import { ScanQRPage } from '../../components/scan-qr-page/ScanQRPage'
import OpenFile from '../../components/open-file/OpenFile'
import { BotFeatureMethod, ExpressFeatureMethod } from '../../types'
import { openClientSettings, useQuery } from '@expressms/smartapp-sdk'
import OpenWebPage from '../../components/open-web-page/OpenWebPage'
import RequestLocation from '../../components/request-location/RequestLocation'
import EchoStaticFile from '../../components/echo-static-file/EchoStaticFile'
import Version from '../../components/ui/version/Version'
import RequestSelfProfile from '../../components/request-self-profile/RequestSelfProfile'
import CloseSmartApp from '../../components/close-smart-app/CloseSmartApp'
import FileProxy from '../../components/file-proxy/FileProxy'
import ConnectionStatus from '../../components/connection-status/ConnectionStatus'
import CreateDeeplink from '../../components/create-deeplink/CreateDeeplink'
import IosSwipeToggler from '../../components/ios-swipe-toggler/IosSwipeToggler'
import OpenMessage from '../../components/open-message/OpenMessage'
import ClientStorage from '../../components/client-storage/ClientStorage'
import HandleDeeplinkPage from '../../components/handle-deeplink/HandleDeeplinkPage'
import SearchPhonebookPage from '../../components/search-phonebook/SearchPhonebookPage'
import LocalePage from '../../components/locale/LocalePage'
import UnreadCountersPage from '../../components/unread-counters/UnreadCounters'
import SyncRequestPage from '../../components/sync-request/SyncRequestPage'
import LayoutTypePage from '../../components/layout-type/LayoutTypePage'

export default function FeatureSmartapp() {
  const dispatch = useDispatch()
  const botFeatures = useSelector(getFeaturesMenu)
  const redirectPath = useSelector(getRedirectPath)
  const { platform } = useQuery()

  const handleOpenClientSettings = (e) => {
    if (platform !== 'web') {
      openClientSettings()
    } else {
      alert('Feature is unavailable on web client')
    }
    e.preventDefault()
  }

  useEffect(() => {
    if (redirectPath) history.push(redirectPath)

    if (!botFeatures) dispatch(loadFeatures())
  }, [dispatch, redirectPath, botFeatures])

  return (
    <div className='feature-smartapp'>
      <div className='header'>
        <span className='header__content'>
          <BotxIcon className='header__icon' height={20} width={20} />
          <span className='header__text' id='toolbar-title'>Feature Smartapp</span>
        </span>
      </div>
      <ToastContainer />
      <section className='feature-smartapp__menu'>
        <HashRouter>
          <Switch>
            {botFeatures?.length && botFeatures.map(item => {
              return item.name === ECHO_STATIC_FILE_FEATURE.name ? (
                <Route
                  key={`${BotFeatureMethod.ECHO_STATIC_FILE}-route`}
                  path={`/${BotFeatureMethod.ECHO_STATIC_FILE}`}
                >
                  <EchoStaticFile />
                </Route>
              ) : (
                <Route
                  key={`${item.method}-route`}
                  path={`/${item.method}`}
                >
                  <FeaturePage {...item} />
                </Route>
              )
            })}
            <Route
              key={`${SEARCH_PHONEBOOK.method}-route`}
              path={`/${SEARCH_PHONEBOOK.method}`}
            >
              <SearchPhonebookPage />
            </Route>
            <Route
              key={`${GUARANTEED_DELIVERY_FEATURE.path}-route`}
              path={`/${GUARANTEED_DELIVERY_FEATURE.path}`}
            >
              <FeaturePage
                name={GUARANTEED_DELIVERY_FEATURE.name}
                method={GUARANTEED_DELIVERY_FEATURE.method}
                uiElements={GUARANTEED_DELIVERY_FEATURE.uiElements}
              />
            </Route>
            {EXPRESS_FEATURES.map(item => (
              <Route
                key={`${item.method}-route`}
                path={`/${item.method}`}
              >
                <FeaturePage {...item} />
              </Route>
            ))}
            <Route
              key={`${OPEN_SMART_APP_META_FEATURE.method}-route`}
              path={`/${OPEN_SMART_APP_META_FEATURE.method}`}
            >
              <MetaPage name={OPEN_SMART_APP_META_FEATURE.name} />
            </Route>
            <Route
              key={`${EXPRESS_NOTIFICATION_FEATURE.method}-route`}
              path={`/${EXPRESS_NOTIFICATION_FEATURE.method}`}
            >
              <ExpressNotifications />
            </Route>
            <Route
              key={`${SCAN_QR_FEATURE.method}-route`}
              path={`/${SCAN_QR_FEATURE.method}`}
            >
              <ScanQRPage />
            </Route>
            <Route
              key={`${OPEN_FILE_FEATURE.method}-route`}
              path={`/${OPEN_FILE_FEATURE.method}`}
            >
              <OpenFile />
            </Route>
            <Route
              key={`${OPEN_WEB_PAGE_FEATURE.method}-route`}
              path={`/${OPEN_WEB_PAGE_FEATURE.method}`}
            >
              <OpenWebPage />
            </Route>
            <Route
              key={`${REQUEST_LOCATION.method}-route`}
              path={`/${REQUEST_LOCATION.method}`}
            >
              <RequestLocation />
            </Route>
            <Route
              key={`${REQUEST_SELF_PROFILE_FEATURE.method}-route`}
              path={`/${REQUEST_SELF_PROFILE_FEATURE.method}`}
            >
              <RequestSelfProfile />
            </Route>
            <Route
              key={`${CLOSE_SMART_APP_FEATURE.method}-route`}
              path={`/${CLOSE_SMART_APP_FEATURE.method}`}
            >
              <CloseSmartApp />
            </Route>
            <Route
              key={`${FILE_PROXY.method}-route`}
              path={`/${FILE_PROXY.method}`}
            >
              <FileProxy />
            </Route>
            <Route
              key={`${CONNECTION_STATUS.method}-route`}
              path={`/${CONNECTION_STATUS.method}`}
            >
              <ConnectionStatus />
            </Route>
            <Route
              key={`${MENU_ITEM_MESSAGE_META.method}-route`}
              path={`/${MENU_ITEM_MESSAGE_META.method}`}
            >
              <MetaPage name={MENU_ITEM_MESSAGE_META.name} />
            </Route>
            <Route
              key={`${CREATE_DEEPLINK.method}-route`}
              path={`/${CREATE_DEEPLINK.method}`}
            >
              <CreateDeeplink />
            </Route>
            <Route
              key={`${IOS_SWIPE.method}-route`}
              path={`/${IOS_SWIPE.method}`}
            >
              <IosSwipeToggler />
            </Route>
            <Route
              key={`${OPEN_CHAT_MESSAGE.method}-route`}
              path={`/${OPEN_CHAT_MESSAGE.method}`}
            >
              <OpenMessage />
            </Route>
            <Route
              key={`${CLIENT_STORAGE.method}-route`}
              path={`/${CLIENT_STORAGE.method}`}
            >
              <ClientStorage />
            </Route>
            <Route
              key={`${HANDLE_DEEPLINK_FEATURE.method}-route`}
              path={`/${HANDLE_DEEPLINK_FEATURE.method}`}
            >
              <HandleDeeplinkPage />
            </Route>
            <Route
              key={`${UNREAD_COUNTER_FEATURE.method}-route`}
              path={`/${UNREAD_COUNTER_FEATURE.method}`}
            >
              <UnreadCountersPage />
            </Route>
            <Route
              key={`${LOCALE_FEATURE.method}-route`}
              path={`/${LOCALE_FEATURE.method}`}
            >
              <LocalePage />
            </Route>
            <Route
              key={`${SYNC_REQUEST_FEATURE.method}-route`}
              path={`/${SYNC_REQUEST_FEATURE.method}`}
            >
              <SyncRequestPage />
            </Route>
            <Route
              key={`${LAYOUT_TYPE_FEATURE.method}-route`}
              path={`/${LAYOUT_TYPE_FEATURE.method}`}
            >
              <LayoutTypePage />
            </Route>
            <Route path={'/'}>
              {botFeatures?.length && (
                <span className={'feature-smartapp__menu-title'}>Bot methods</span>
              )}
              {botFeatures?.length && botFeatures?.map(item => (
                <Link
                  className='feature-smartapp__menu-item'
                  key={`${item.method}-link`}
                  to={`/${item.method}`}
                >
                  <span className="material-icons">send</span>
                  {item.name}
                </Link>
              ))}
              <Link
                className='feature-smartapp__menu-item'
                key={`${GUARANTEED_DELIVERY_FEATURE.path}-link`}
                to={`/${GUARANTEED_DELIVERY_FEATURE.path}`}
              >
                <span className="material-icons">delivery_dining</span>
                {GUARANTEED_DELIVERY_FEATURE.name}
              </Link>
              <span className={'feature-smartapp__menu-title'}>
                Client methods
              </span>
              {EXPRESS_FEATURES.map(item => (
                  item.method === ExpressFeatureMethod.OPEN_CLIENT_SETTINGS ? (
                    <a
                      href="#/"
                      key={`${item.method}-route`}
                      className='feature-smartapp__menu-item'
                      onClick={handleOpenClientSettings}
                    >
                      <span className="material-icons">{item.icon}</span>
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      className='feature-smartapp__menu-item'
                      key={`${item.method}-link`}
                      to={`/${item.method}`}
                    >
                      <span className="material-icons">{item.icon}</span>
                      {item.name}
                    </Link>
                  )
                ),
              )}
              <Link
                className='feature-smartapp__menu-item'
                key={`${SEARCH_PHONEBOOK.method}-link`}
                to={`/${SEARCH_PHONEBOOK.method}`}
              >
                <span className="material-icons">contacts</span>
                {SEARCH_PHONEBOOK.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${EXPRESS_NOTIFICATION_FEATURE.method}-link`}
                to={`/${EXPRESS_NOTIFICATION_FEATURE.method}`}
              >
                <span className="material-icons">notifications_none</span>
                {EXPRESS_NOTIFICATION_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${SCAN_QR_FEATURE.method}-link`}
                to={`/${SCAN_QR_FEATURE.method}`}
              >
                <span className="material-icons">qr_code</span>
                {SCAN_QR_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${OPEN_WEB_PAGE_FEATURE.method}-link`}
                to={`/${OPEN_WEB_PAGE_FEATURE.method}`}
              >
                <span className="material-icons">open_in_new</span>
                {OPEN_WEB_PAGE_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${REQUEST_LOCATION.method}-link`}
                to={`/${REQUEST_LOCATION.method}`}
              >
                <span className="material-icons">my_location</span>
                {REQUEST_LOCATION.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${REQUEST_SELF_PROFILE_FEATURE.method}-link`}
                to={`/${REQUEST_SELF_PROFILE_FEATURE.method}`}
              >
                <span className="material-icons">face</span>
                {REQUEST_SELF_PROFILE_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${CLOSE_SMART_APP_FEATURE.method}-link`}
                to={`/${CLOSE_SMART_APP_FEATURE.method}`}
              >
                <span className="material-icons">close</span>
                {CLOSE_SMART_APP_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${FILE_PROXY.method}-link`}
                to={`/${FILE_PROXY.method}`}
              >
                <span className="material-icons">drive_file_move</span>
                {FILE_PROXY.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${CONNECTION_STATUS.method}-link`}
                to={`/${CONNECTION_STATUS.method}`}
              >
                <span className="material-icons">wifi_off</span>
                {CONNECTION_STATUS.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${CREATE_DEEPLINK.method}-link`}
                to={`/${CREATE_DEEPLINK.method}`}
              >
                <span className="material-icons">link</span>
                {CREATE_DEEPLINK.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${IOS_SWIPE.method}-link`}
                to={`/${IOS_SWIPE.method}`}
              >
                <span className="material-icons">swipe</span>
                {IOS_SWIPE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${OPEN_CHAT_MESSAGE.method}-link`}
                to={`/${OPEN_CHAT_MESSAGE.method}`}
              >
                <span className="material-icons">message</span>
                {OPEN_CHAT_MESSAGE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${CLIENT_STORAGE.method}-link`}
                to={`/${CLIENT_STORAGE.method}`}
              >
                <span className="material-icons">storage</span>
                {CLIENT_STORAGE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${HANDLE_DEEPLINK_FEATURE.method}-link`}
                to={`/${HANDLE_DEEPLINK_FEATURE.method}`}
              >
                <span className="material-icons">add_link</span>
                {HANDLE_DEEPLINK_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${LOCALE_FEATURE.method}-link`}
                to={`/${LOCALE_FEATURE.method}`}
              >
                <span className="material-icons">language</span>
                {LOCALE_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${UNREAD_COUNTER_FEATURE.method}-link`}
                to={`/${UNREAD_COUNTER_FEATURE.method}`}
              >
                <span className="material-icons">1k_plus</span>
                {UNREAD_COUNTER_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${SYNC_REQUEST_FEATURE.method}-link`}
                to={`/${SYNC_REQUEST_FEATURE.method}`}
              >
                <span className="material-icons">timer</span>
                {SYNC_REQUEST_FEATURE.name}
              </Link>
              <Link
                className='feature-smartapp__menu-item'
                key={`${LAYOUT_TYPE_FEATURE.method}-link`}
                to={`/${LAYOUT_TYPE_FEATURE.method}`}
              >
                <span className="material-icons">settings_overscan</span>
                {LAYOUT_TYPE_FEATURE.name}
              </Link>
            </Route>
          </Switch>
        </HashRouter>
      </section>
      <Version/>
    </div>
  )
}
