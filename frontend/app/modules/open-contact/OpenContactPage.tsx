import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenContactPage: FC = () => {
  const { openContactStore: store } = useStore()
  const [huid, setHuid] = useState('')

  const handleHuidChange = (event: React.ChangeEvent<HTMLInputElement>) => setHuid(event.target.value)

  const handleSubmit = () => {
    store.openContact(huid)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие карточки контакта" />
      HUID пользователя
      <Input onChange={handleHuidChange} value={huid} id="phone" />
      <Button onClick={handleSubmit} id="submit" title="Открыть" icon="perm_contact_calendar" />
    </FeaturePage>
  )
}

export default observer(OpenContactPage)
