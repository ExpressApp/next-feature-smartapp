import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import FeaturesHeader from './FeaturesHeader'
import BotFeatures from './BotFeatures'
import MainLoader from '../../components/MainLoader'
import ClientFeatures from './ClientFeatures'
import CloseSmartAppPage from '../close-smartapp/CloseSmartAppPage'
import LayoutTypePage from '../layout-type/LayoutTypePage'
import SearchPhonebookPage from '../search-phonebook/SearchPhonebookPage'
import AddContactPage from '../add-contact/AddContactPage'
import GetContactPage from '../get-contact/GetContactPage'
import OpenContactPage from '../open-contact/OpenContactPage'
import CreatePersonalChatPage from '../create-personal-chat/CreatePersonalChatPage'
import OpenGroupChatPage from '../open-group-chat/OpenGroupChatPage'
import GetChatsPage from '../get-chats/GetChatsPage'
import OpenSmartAppPage from '../open-smartapp/OpenSmartAppPage'
import SendMessagePage from '../send-message/SendMessagePage'
import OpenSettingsPage from '../open-settings/OpenSmartAppPage'
import OpenWebPage from '../open-web-page/OpenWebPage'
import ScanQrPage from '../scan-qr/ScarQrPage'
import GetLocationPage from '../get-location/GetLocationPage'
import FileProxyPage from '../file-proxy/FileProxyPage'
import ConnectionStatusPage from '../connection-status/ConnectionStatusPage'
import CreateDeeplinkPage from '../create-deeplink/CreateDeeplinkPage'
import IosSwipePage from '../ios-swipe/IosSwipePage'
import OpenChatMessagePage from '../open-chat-message/OpenChatMessagePage'
import HandleDeeplinkPage from '../handle-deeplink/HandleDeeplinkPage'
import LocalePage from '../locale/LocalePage'
import UnreadCountersPage from '../unread-counters/UnreadCountersPage'
import ClientStoragePage from '../client-storage/ClientStoragePage'
import RequestSelfProfilePage from '../request-self-profile/RequestSelfProfilePage'
import SyncRequestPage from '../sync-request/SyncRequestPage'
import InitialDataPage from '../initial-data/InitialDataPage'
import GuaranteedDeliveryPage from '../guaranteed-delivery/GuaranteedDeliveryPage'
import BotCommandPage from '../bot-command/BotCommandPage'
import MaxFileSizePage from '../max-file-size/MaxFileSizePage'

const Wrapper = styled.div`
  margin-bottom: 30px;
`

const FeaturesList = styled.section`
  display: flex;
  flex-direction: column;
`

const FeaturesListPage = () => {
  const { featuresStore: store } = useStore()

  useEffect(() => {
    store.loadFeatures()
  }, [])

  return (
    <>
      <Wrapper>
        <FeaturesHeader />
        <Routes>
          <Route
            path="/"
            element={
              <FeaturesList>
                <BotFeatures features={store.features} />
                <ClientFeatures />
              </FeaturesList>
            }
          />
          {store.features.map(feat => (
            <Route key={feat.method} path={`/${feat.method}`} element={<BotCommandPage botFeature={feat} />} />
          ))}
          <Route path="/add-contact" element={<AddContactPage />} />
          <Route path="/get-contact" element={<GetContactPage />} />
          <Route path="/open-contact-card" element={<OpenContactPage />} />
          <Route path="/create-personal-chat" element={<CreatePersonalChatPage />} />
          <Route path="/open-group-chat" element={<OpenGroupChatPage />} />
          <Route path="/open-smartapp" element={<OpenSmartAppPage />} />
          <Route path="/send-message" element={<SendMessagePage />} />
          <Route path="/open-settings" element={<OpenSettingsPage />} />
          <Route path="/get-chats" element={<GetChatsPage />} />
          <Route path="/search-phonebook" element={<SearchPhonebookPage />} />
          <Route path="/scan-qr" element={<ScanQrPage />} />
          <Route path="/open-web-page" element={<OpenWebPage />} />
          <Route path="/location" element={<GetLocationPage />} />
          <Route path="/request-self-profile" element={<RequestSelfProfilePage />} />
          <Route path="/close-smartapp" element={<CloseSmartAppPage />} />
          <Route path="/file-proxy" element={<FileProxyPage />} />
          <Route path="/connection-status" element={<ConnectionStatusPage />} />
          <Route path="/create-deeplink" element={<CreateDeeplinkPage />} />
          <Route path="/ios-swipe" element={<IosSwipePage />} />
          <Route path="/open-chat-message" element={<OpenChatMessagePage />} />
          <Route path="/client-storage" element={<ClientStoragePage />} />
          <Route path="/handle-deeplink" element={<HandleDeeplinkPage />} />
          <Route path="/locale" element={<LocalePage />} />
          <Route path="/unread-counters" element={<UnreadCountersPage />} />
          <Route path="/sync-request" element={<SyncRequestPage />} />
          <Route path="/layout-type" element={<LayoutTypePage />} />
          <Route path="/initial-data" element={<InitialDataPage />} />
          <Route path="/guaranteed-delivery" element={<GuaranteedDeliveryPage />} />
          <Route path="/max-file-size" element={<MaxFileSizePage />} />
        </Routes>
      </Wrapper>
      {store.showMainLoader && <MainLoader />}
    </>
  )
}

export default observer(FeaturesListPage)
