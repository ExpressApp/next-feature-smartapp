import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const CreatePersonalChatPage: FC = () => {
  const { createPersonalChatStore: store } = useStore()
  const [huid, setHuid] = useState('')

  const handleHuidChange = (event: React.ChangeEvent<HTMLInputElement>) => setHuid(event.target.value)

  const handleSubmit = () => {
    store.createPersonalChat(huid)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Создание персонального чата" />
      HUID пользователя
      <Input onChange={handleHuidChange} value={huid} id="phone" />
      <Button onClick={handleSubmit} id="submit" title="Создать" disabled={!huid} />
    </FeaturePage>
  )
}

export default observer(CreatePersonalChatPage)
