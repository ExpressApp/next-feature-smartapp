import React, { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import FeaturePage from '../../components/FeaturePage'

const LocalePage: FC = () => {
  const [locale, setLocale] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    setLocale(searchParams.get('locale') || 'unknown')
  }, [])

  return (
    <FeaturePage>
      <FeatureHeader name="Текущая локаль" />
      Локаль приложения
      <Input value={locale} id="locale-txt" disabled />
    </FeaturePage>
  )
}

export default observer(LocalePage)
