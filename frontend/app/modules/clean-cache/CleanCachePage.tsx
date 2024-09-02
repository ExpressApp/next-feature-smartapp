import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const CleanCachePage: FC = () => {
  const { cleanCacheStore: store } = useStore()

  const handleSubmit = () => {
    store.cleanCache()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Очистка кеша статики" />
      <Button onClick={handleSubmit} id="submit" title="Очистить" />
    </FeaturePage>
  )
}

export default observer(CleanCachePage)
