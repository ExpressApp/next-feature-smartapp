import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'

const KcAccessTokenPage: FC = () => {
  const { kcAccessTokenStore: store } = useStore()

  const handleSubmit = () => store.getToken()

  return (
    <FeaturePage>
      <FeatureHeader name="Токен Keycloak" />
      <span>Токен</span>
      <Input value={`${store.token}`} id="token" disabled />
      <br/>
      <Button onClick={handleSubmit} id="submit" title="Получить" />
    </FeaturePage>
  )
}

export default observer(KcAccessTokenPage)
