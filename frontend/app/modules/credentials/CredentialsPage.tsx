import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import styled from 'styled-components'
import { CredentialsType } from '@expressms/smartapp-sdk/build/main/types/proxy'

const Select = styled.select`
  padding: 12px 20px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid var(--light-grey);
  border-radius: 3px;
  font-size: ${props => Math.round(props.theme.fontScale * 14)}px;
  color: var(--font-color);
  box-sizing: border-box;
  background-color: var(--input-bg);
`

const CredentialsPage: FC = () => {
  const { credentialsStore: store } = useStore()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState<CredentialsType>('login_password')

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setType(event.target.value as CredentialsType)

  const handleSetCredentials = () => store.setCredentials(login, password, type)
  const handleGetCredentials = () => store.getCredentials()
  const handleDeleteCredentials = () => store.deleteCredentials()

  return (
    <FeaturePage>
      <FeatureHeader name="Хранение паролей" />
      Тип
      <Select className="input" onChange={handleTypeChange} defaultValue={type} id="type-select">
        <option value="login_password">Логин, пароль</option>
        <option value="cookie">Cookie</option>
      </Select>
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
      <Button onClick={handleDeleteCredentials} id="del-creds" title="Удалить" />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(CredentialsPage)
