import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import FeaturePage from '../../components/FeaturePage'

const InitialDataPage: FC = () => {
  const { initialDataStore: store } = useStore()

  return (
    <FeaturePage>
      <FeatureHeader name="Данные инициализации SmartApp" />
      <br />
      {store.data && <JsonViewer data={store.data} id="response" />}
    </FeaturePage>
  )
}

export default InitialDataPage
