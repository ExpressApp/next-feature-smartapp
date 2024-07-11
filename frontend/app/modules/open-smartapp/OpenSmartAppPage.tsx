import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenSmartAppPage: FC = () => {
  const { openSmartAppStore: store } = useStore()
  const [appId, setAppId] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setAppId(event.target.value)

  const handleSubmit = () => {
    store.openSmartApp(appId)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие SmartApp" />
      SmartApp ID
      <Input onChange={handleChange} value={appId} id="appId" />
      <Button onClick={handleSubmit} id="submit" title="Открыть" disabled={!appId} />
    </FeaturePage>
  )
}

export default OpenSmartAppPage
