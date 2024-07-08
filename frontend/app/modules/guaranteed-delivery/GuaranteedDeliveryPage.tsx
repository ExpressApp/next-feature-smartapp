import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'

const GuaranteedDeliveryPage: FC = () => {
  const { guaranteedDeliveryStore: store } = useStore()
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)

  const handleSubmit = () => {
    store.sendAppEvent(text)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Событие с гарантированной доставкой" />
      Текст
      <Input id="text" onChange={handleChange} value={text} />
      <Button onClick={handleSubmit} id="submit" title="Отправить" icon="send" />
      <br />
      <br />
      {store.response && `Текст в ответе: ${store.response?.payload.result}`}
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(GuaranteedDeliveryPage)
