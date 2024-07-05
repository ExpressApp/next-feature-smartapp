import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const SendMessagePage: FC = () => {
  const { sendMessageStore: store } = useStore()
  const [message, setMessage] = useState('')
  const [groupChatId, setGroupChatId] = useState('')
  const [userHuid, setUserHuid] = useState('')

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)

  const handleGroupChatIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setGroupChatId(event.target.value)

  const handleUserHuidChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserHuid(event.target.value)

  const handleSubmit = () => {
    store.sendMessage(message, groupChatId, userHuid)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Получение контакта из локальной книги" />
      Сообщение
      <Input onChange={handleMessageChange} value={message} id="message" />
      ID чата
      <Input onChange={handleGroupChatIdChange} value={groupChatId} id="groupChatId" />
      HUID пользователя
      <Input onChange={handleUserHuidChange} value={userHuid} id="userHuid" />
      <Button onClick={handleSubmit} id="submit" title="Отправить" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(SendMessagePage)
