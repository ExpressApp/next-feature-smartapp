import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const SendBotCommandPage: FC = () => {
  const { sendBotCommandStore: store } = useStore()
  const [userHuid, setUserHuid] = useState('')
  const [body, setBody] = useState('')
  const [data, setData] = useState('')

  const handleUserHuidChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserHuid(event.target.value)

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => setBody(event.target.value)

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => setData(event.target.value)

  const handleSubmit = () => {
    store.sendBotCommand(userHuid, body, data)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Отправка команды боту" />
      HUID пользователя
      <Input onChange={handleUserHuidChange} value={userHuid} id="userHuid" />
      Сообщение
      <Input onChange={handleBodyChange} value={body} id="body" />
      Данные
      <Input onChange={handleDataChange} value={data} id="data" />
      <Button onClick={handleSubmit} id="submit" title="Отправить" disabled={!userHuid || !body} />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(SendBotCommandPage)
