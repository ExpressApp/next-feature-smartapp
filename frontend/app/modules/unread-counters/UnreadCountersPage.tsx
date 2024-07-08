import React, { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import { EntityType } from './unread-counters.types'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const Select = styled.select`
  padding: 12px 20px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid var(--light-grey);
  border-radius: 3px;
  font-size: 14px;
  color: var(--font-color);
  box-sizing: border-box;
  background-color: var(--input-bg);
`

const UnreadCountersPage: FC = () => {
  const { unreadCountersStore: store } = useStore()
  const [id, setId] = useState('')
  const [type, setType] = useState<EntityType>('huid')

  useEffect(() => {
    return () => {
      store.unsubscribeUnreadCounterChange()
    }
  }, [])

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => setType(event.target.value as EntityType)

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setId(event.target.value)

  const handleSubscribeUnreadCounters = () => store.subscribeUnreadCounterChange()

  const handleUnsubscribeUnreadCounters = () => store.unsubscribeUnreadCounterChange()

  const handleGetUnreadCounter = () => {
    store.getUnreadCounter(type, id)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Каунтер непрочитанных событий" />
      Тип
      <Select className="input" onChange={handleTypeChange} defaultValue={type} id="type-select">
        <option value="huid">пользователь</option>
        <option value="chat">чат</option>
        <option value="smartapp">smartapp</option>
      </Select>
      ID
      <Input onChange={handleIdChange} value={id} />
      {store.unreadCounter !== null && (
        <>
          Каунтер
          <Input value={`${store.unreadCounter}`} disabled />
        </>
      )}
      <Button onClick={handleGetUnreadCounter} id="get-status-btn" title="Запросить каунтер" />
      <br />
      <br />
      <Buttons>
        <Button onClick={handleSubscribeUnreadCounters} id="subscribe-btn" title="Подписаться" />
        <Button onClick={handleUnsubscribeUnreadCounters} id="unsubscribe-btn" title="Отписаться" />
      </Buttons>
    </FeaturePage>
  )
}

export default observer(UnreadCountersPage)
