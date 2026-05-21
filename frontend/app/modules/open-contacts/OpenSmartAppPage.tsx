import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenContactsPage: FC = () => {
  const { openContactsStore: store } = useStore()

  const handleSubmit = () => {
    store.openContacts()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие экрана контактов" />
      <Button onClick={handleSubmit} id="submit" title="Открыть" />
    </FeaturePage>
  )
}

export default OpenContactsPage
