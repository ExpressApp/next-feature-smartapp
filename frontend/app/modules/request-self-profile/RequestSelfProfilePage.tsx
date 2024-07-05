import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const RequestSelfProfilePage: FC = () => {
  const { requestSelfProfileStore: store } = useStore()

  const handleSubmit = () => {
    store.requestSelfProfile()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Получение своего профиля" />
      <Button onClick={handleSubmit} id="submit" title="Запросить" icon="account_circle" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(RequestSelfProfilePage)
