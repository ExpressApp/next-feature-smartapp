import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import ConnectionStatusIcon from './ConnectionStatusIcon'
import Button from '../../components/Button'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const ConnectionStatusPage: FC = () => {
  const { connectionStatusStore: store } = useStore()

  const handleGetConnectionStatus = () => store.getConnectionStatus()

  const handleSubscribeConnectionStatus = () => store.subscribeConnectionStatusChange()

  const handleUnsubscribeConnectionStatus = () => store.unsubscribeConnectionStatusChange()

  useEffect(() => {
    return () => {
      store.unsubscribeConnectionStatusChange()
    }
  }, [])

  return (
    <FeaturePage>
      <FeatureHeader name="Статус подключения к серверу" />
      Запрос статуса
      <div id="get-status-txt" className="connection-status">
        <ConnectionStatusIcon connectionStatus={store.connectionStatus} />
      </div>
      <Button onClick={handleGetConnectionStatus} id="get-status-btn" title="Проверить статус" />
      <br />
      <br />
      <br />
      Подписка на изменение статуса
      <div id="subscription-status-txt" className="connection-status">
        <ConnectionStatusIcon connectionStatus={store.subscribedConnectionStatus} />
      </div>
      <Buttons>
        <Button onClick={handleSubscribeConnectionStatus} id="subscribe-btn" title="Подписаться" />
        <Button onClick={handleUnsubscribeConnectionStatus} id="unsubscribe-btn" title="Отписаться" />
      </Buttons>
    </FeaturePage>
  )
}

export default observer(ConnectionStatusPage)
