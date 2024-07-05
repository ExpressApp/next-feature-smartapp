import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const GetContactPage: FC = () => {
  const { getContactStore: store } = useStore()
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)

  const handleSubmit = () => {
    store.getContact(phone)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Получение контакта из локальной книги" />
      Телефон
      <Input onChange={handlePhoneChange} value={phone} id="phone" />
      <Button onClick={handleSubmit} id="submit" title="Получить" icon="person_search" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(GetContactPage)
