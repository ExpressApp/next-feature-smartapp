import React, { FC, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const GetSmartAppListPage: FC = () => {
  const { getSmartAppListStore: store } = useStore()

  const handleSubmit = () => {
    store.getSmartAppList()
  }

  useEffect(() => {
    store.subscribeSmartAppListChange()
    return () => {
      store.unsubscribeSmartAppListChange()
    }
  }, [])

  return (
    <FeaturePage>
      <FeatureHeader name="Список SmartApp" />
      <Button onClick={handleSubmit} id="submit" title="Загрузить" icon="list" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
      {store.smartAppListFromSubscription && (
        <>
          <br />
          <br />
          Данные полученные по подписке
          <br />
          <JsonViewer data={store.smartAppListFromSubscription} id="subscription" />
        </>
      )}
      <br />
    </FeaturePage>
  )
}

export default observer(GetSmartAppListPage)
