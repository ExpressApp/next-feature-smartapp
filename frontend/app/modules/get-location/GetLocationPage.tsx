import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const GetLocationPage: FC = () => {
  const { getLocationStore: store } = useStore()

  const handleSubmit = () => {
    store.getLocation()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Запрос местоположения" />
      <Button onClick={handleSubmit} id="submit" title="Запросить" icon="my_location" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(GetLocationPage)
