import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const CredentialsPage: FC = () => {
  const { credentialsStore: store } = useStore()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

  const handleSetCredentials = () => store.setCredentials(login, password)
  const handleGetCredentials = () => store.getCredentials()

  return (
    <FeaturePage>
      <FeatureHeader name="Хранение паролей" />
      Логин
      <Input onChange={handleLoginChange} value={login} id="login" />
      Пароль
      <Input onChange={handlePasswordChange} value={password} id="password" />
      <Button onClick={handleSetCredentials} id="set-creds" title="Сохранить" disabled={!login || !password} />
      <br />
      <br />
      <Button onClick={handleGetCredentials} id="get-creds" title="Загрузить" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(CredentialsPage)
