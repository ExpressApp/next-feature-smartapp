import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import { WebCommandsPipeline } from '@expressms/smartapp-sdk/build/main/types/proxy'
import { TextArea } from '../../components/TextArea'

const WebCommandsPipelinePage: FC = () => {
  const { webCommandsPipelineStore: store } = useStore()

  const [url, setUrl] = useState('https://nextcloud.ccsteam.ru')
  const [pipeline, setPipeline] = useState(store.getPipelineText())

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setLogin(event.target.value)
    setPipeline(store.getPipelineText())
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setPassword(event.target.value)
    setPipeline(store.getPipelineText())
  }
  const handlePipelineChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPipeline(event.target.value)
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)

  const handleSubmit = () => {
    const pipe = JSON.parse(pipeline) as WebCommandsPipeline
    store.runWebCommandsPipeline(url, pipe)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Авторизация на сайте" />
      Сайт
      <Input onChange={handleUrlChange} value={url} id="url" />
      Логин
      <Input onChange={handleLoginChange} value={store.login} id="login" />
      Пароль
      <Input onChange={handlePasswordChange} value={store.password} id="password" type="password" />
      Пайплайн операций
      <TextArea onChange={handlePipelineChange} id="pipeline" value={pipeline} rows={30} />
      <Button onClick={handleSubmit} id="submit" title="Выполнить" />
    </FeaturePage>
  )
}

export default observer(WebCommandsPipelinePage)
