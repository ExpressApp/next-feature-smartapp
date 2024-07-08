import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const CloseSmartAppPage: FC = () => {
  const { closeSmartAppStore: store } = useStore()

  const handleSubmit = () => {
    store.closeSmartApp()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Закрыть SmartApp" />
      <Button onClick={handleSubmit} id="submit" title="Закрыть" icon="close" />
    </FeaturePage>
  )
}

export default CloseSmartAppPage
