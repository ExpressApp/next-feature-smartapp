import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const HandleDeeplinkPage: FC = () => {
  const { handleDeeplinkStore: store } = useStore()
  const [deeplink, setDeeplink] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setDeeplink(event.target.value)

  const handleSubmit = () => {
    store.handleDeeplink(deeplink)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие диплинка" />
      Диплинк
      <Input onChange={handleChange} value={deeplink} />
      <Button onClick={handleSubmit} id="open-btn" title="Открыть" icon="link" />
    </FeaturePage>
  )
}

export default observer(HandleDeeplinkPage)
