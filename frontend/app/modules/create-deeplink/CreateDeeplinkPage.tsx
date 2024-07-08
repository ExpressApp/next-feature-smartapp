import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import styled from 'styled-components'

const Meta = styled.textarea`
  padding: 12px 20px;
  width: calc(100% - 40px);
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  font-size: 14px;
  background-color: var(--input-bg);
  color: var(--font-color);
  margin: 10px 0px;
`

const CreateDeeplinkPage: FC = () => {
  const { createDeeplinkStore: store } = useStore()

  const [appId, setAppId] = useState('email-smartapp')
  const [meta, setMeta] = useState(
    JSON.stringify(
      [
        {
          key: 'route',
          value: '/send-email',
        },
        {
          key: 'email',
          value: 'test@mail.ru',
        },
      ],
      null,
      2
    )
  )

  const handleAppIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setAppId(event.target.value)

  const handleMetaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMeta(event.target.value)

  const handleSubmit = () => {
    store.createDeeplink(appId, meta)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Создание диплинка" />
      SmartApp ID
      <Input onChange={handleAppIdChange} value={appId} id="app-id-text" />
      Meta
      <Meta onChange={handleMetaChange} value={meta} id="meta-text" rows={10} />
      Deeplink
      <Input value={store.deeplink} id="deeplink-text" disabled />
      <Button onClick={handleSubmit} id="submit" title="Сгенерировать ссылку" icon="link" />
    </FeaturePage>
  )
}

export default observer(CreateDeeplinkPage)
