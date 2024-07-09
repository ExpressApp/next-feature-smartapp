import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const AddContactPage: FC = () => {
  const { addContactStore: store } = useStore()
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  const handleSubmit = () => {
    store.addContact(phone, name)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Добавление контакта в локальную книгу" />
      Телефон
      <Input onChange={handlePhoneChange} value={phone} id="phone" type="number" />
      Имя
      <Input onChange={handleNameChange} value={name} id="name" />
      <Button onClick={handleSubmit} id="submit" title="Добавить" icon="person_add" disabled={!phone || !name} />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(AddContactPage)
