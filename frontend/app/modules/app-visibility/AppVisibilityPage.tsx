import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import Button from '../../components/Button'

const AppVisibilityPage: FC = () => {
  const { appVisibilityStore } = useStore()

  useEffect(() => {
    appVisibilityStore.subscribeAppVisibilityChange()

    return () => {
      appVisibilityStore.unsubscribeAppVisibilityChange()
    }
  }, [])

  const handleSubmit = () => appVisibilityStore.getAppVisibility()

  return (
    <FeaturePage>
      <FeatureHeader name="Видимость окна SmartApp" />
      <span>Видимость</span>
      <Input
        value={`${appVisibilityStore.visibile === null ? '' : appVisibilityStore.visibile}`}
        id="layout-type-text"
        disabled
      />
      <Button onClick={handleSubmit} id="submit" title="Получить" />
      <br />
      <br />
      <br />
      <i>Сверните и разверните окно SmartApp чтобы увидеть сообщение о смене видимости.</i>
    </FeaturePage>
  )
}

export default observer(AppVisibilityPage)
