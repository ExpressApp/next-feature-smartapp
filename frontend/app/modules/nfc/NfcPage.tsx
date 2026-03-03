import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
const StatusDiv = styled.div<{ value: boolean | null }>`
  color: ${props => props.value ? 'green' : '#d44'};
`

const DEFAULT_MSG = {
  mimeType: 'text/plain',
  bytes: '[116, 101, 115, 116]',
}

const NfcPage: FC = () => {
  const { nfcStore: store } = useStore()
  const [messages, setMessages] = useState<Array<{ mimeType: string; bytes: string }>>([DEFAULT_MSG])

  const handleMimeChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr = [...messages]
    arr[index].mimeType = event.target.value
    setMessages(arr)
  }
  const handleBytesChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr = [...messages]
    arr[index].bytes = event.target.value
    setMessages(arr)
  }

  const handleAddClick = () => setMessages([...messages, DEFAULT_MSG])
  const handleReadClick = () => store.readTag()
  const handleWriteClick = () =>
    store.writeTag(
      messages.map(message => ({
        ...message,
        bytes: JSON.parse(message.bytes),
      }))
    )
  const handleGetStatusClick = () => {}

  return (
    <FeaturePage>
      <FeatureHeader name="NFC" />
      <b>Статус считывателя</b>
      <br />
      <br />
      {store.nfcAvailable !== null && store.nfcEnabled !== null && (
        <>
          <StatusDiv value={store.nfcAvailable}>◉ {!store.nfcAvailable && 'не '} найден</StatusDiv>
          <StatusDiv value={store.nfcEnabled}>◉ {!store.nfcEnabled && 'не '} включен</StatusDiv>
        </>
      )}
      <Button onClick={handleGetStatusClick} id="status-btn" title="Получить статус" />
      <br />
      <br />
      <b>Запись</b>
      <br />
      <br />
      {messages.map((message, index) => (
        <div key={index}>
          #{index + 1} MIME
          <Input onChange={handleMimeChange(index)} value={message.mimeType} id="mime-text" />#{index + 1} Данные
          <Input onChange={handleBytesChange(index)} value={message.bytes} id="bytes-text" />
        </div>
      ))}
      <Buttons>
        <Button onClick={handleWriteClick} id="write-btn" title="Записать метку" icon="download" />
        <Button onClick={handleAddClick} id="add-btn" title="+" />
      </Buttons>
      <br />
      <br />
      <b>Чтение</b>
      <br />
      <Button onClick={handleReadClick} id="read-btn" title="Считать метку" icon="upload" />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(NfcPage)
