import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'

const LayoutTypePage: FC = () => {
  const { layoutTypeStore } = useStore()

  useEffect(() => {
    layoutTypeStore.getLayoutType()
    layoutTypeStore.subscribeLayoutTypeChange()

    return () => {
      layoutTypeStore.unsubscribeLayoutTypeChange()
    }
  }, [])

  return (
    <FeaturePage>
      <FeatureHeader name="Размер окна Web" />
      <span>Текущий размер окна</span>
      <Input value={`${layoutTypeStore.layoutType}`} id="layout-type-text" disabled />
    </FeaturePage>
  )
}

export default observer(LayoutTypePage)
