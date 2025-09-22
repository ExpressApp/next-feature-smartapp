import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'

const messages = {
  true: 'закреплено',
  false: 'не закреплено',
  null: 'старый клиент не поддерживает эту функцию',
}

const PinnedPage: FC = () => {
  const { appStore: store } = useStore()

  return (
    <FeaturePage>
      <FeatureHeader name="Закрепление в меню" />
      <Input value={messages[`${store.isPinned}`]} id="layout-type-text" disabled />
    </FeaturePage>
  )
}

export default observer(PinnedPage)
