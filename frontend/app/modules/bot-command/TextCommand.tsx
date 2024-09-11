import React, { FC, useCallback, useEffect, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import { BotCommandPageProps, FileData } from './bot-command.types'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import UuidInput from './UuidInput'
import AttrList from './AttrList'

const TextCommand: FC<BotCommandPageProps> = ({ botFeature }) => {
  const { botCommandStore: store } = useStore()
  const [formData, setFormData] = useState<{ [key: string]: string | string[] | FileData[] }>({})

  useEffect(() => {
    store.clearResponse()
    store.clearHuids()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleUuidChange = useCallback(
    (id: string, uuids: string[]) => {
      setFormData({
        ...formData,
        [id]: uuids,
      })
    },
    [formData]
  )

  const handleSubmit = () => {
    store.clearHuids()
    store.sendTextAppEvent(botFeature.method, formData)
  }

  return (
    <>
      {botFeature.uiElements.map(({ type, id, label }) => {
        switch (type) {
          case 'INPUT_TEXT':
            return (
              <div key={id}>
                {label}
                <Input id={id} value={formData[id] as string} onChange={handleInputChange} />
              </div>
            )
          case 'INPUT_NUMBER':
            return (
              <div key={id}>
                {label}
                <Input id={id} value={formData[id] as string} onChange={handleInputChange} type="number" />
              </div>
            )
          case 'ARRAY_UUID':
            return <UuidInput key={id} id={id} label={label} onChange={handleUuidChange} />
        }
      })}
      <Button onClick={handleSubmit} id="submit" title="Отправить" icon="send" />
      <br />
      <br />
      {botFeature.method === 'search_users' && <AttrList attrs={store.huidsResponse} />}
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </>
  )
}

export default observer(TextCommand)
