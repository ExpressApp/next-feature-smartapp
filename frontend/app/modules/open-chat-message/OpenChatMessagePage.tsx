import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const OpenChatMessagePage: FC = () => {
  const { openChatMessageStore: store } = useStore()
  const [groupChatId, setGroupChatId] = useState('')
  const [syncId, setSyncId] = useState('')

  const handleGroupChatIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setGroupChatId(event.target.value)

  const handleSyncIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setSyncId(event.target.value)

  const handleSubmit = () => {
    store.openChatMessage(groupChatId, syncId)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие сообщения в чате" />
      ID чата
      <Input onChange={handleGroupChatIdChange} value={groupChatId} id="group-chat-id-text" />
      SyncId сообщения
      <Input onChange={handleSyncIdChange} value={syncId} id="sync-id-text" />
      <Button onClick={handleSubmit} id="submit" title="Показать сообщение" />
    </FeaturePage>
  )
}

export default observer(OpenChatMessagePage)
