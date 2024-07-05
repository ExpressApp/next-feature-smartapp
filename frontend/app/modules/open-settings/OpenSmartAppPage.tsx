import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenSettingsPage: FC = () => {
  const { openSettingsStore: store } = useStore()

  const handleSubmit = () => {
    store.openSettings()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие экрана настроек" />
      <Button onClick={handleSubmit} id="submit" title="Открыть" />
    </FeaturePage>
  )
}

export default OpenSettingsPage
