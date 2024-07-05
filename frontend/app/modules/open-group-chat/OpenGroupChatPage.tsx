import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenGroupChatPage: FC = () => {
  const { openGroupChatChatStore: store } = useStore()
  const [groupChatId, setGroupChatId] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setGroupChatId(event.target.value)

  const handleSubmit = () => {
    store.openGroupChat(groupChatId)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие чата" />
      HUID пользователя
      <Input onChange={handleChange} value={groupChatId} id="groupChatId" />
      <Button onClick={handleSubmit} id="submit" title="Открыть" />
    </FeaturePage>
  )
}

export default observer(OpenGroupChatPage)
