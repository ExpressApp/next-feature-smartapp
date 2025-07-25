import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const ExpressDiskGetAuthPage: FC = () => {
  const { expressDiskGetAuthStore: store } = useStore()

  const handleSubmit = () => store.getAuthCode()

  return (
    <FeaturePage>
      <FeatureHeader name="Получение кода авторизации" />
      <Button onClick={handleSubmit} id="submit" title="Запросить" icon="lock" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(ExpressDiskGetAuthPage)
