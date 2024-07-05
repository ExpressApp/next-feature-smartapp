import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import JsonViewer from '../../components/JsonViewer'

const GetChatsPage: FC = () => {
  const { getChatsStore: store } = useStore()
  const [filter, setFilter] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)

  const handleSubmit = () => {
    store.getChats(filter)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Поиск чатов" />
      Строка поиска
      <Input onChange={handleChange} value={filter} id="filter" />
      <Button onClick={handleSubmit} id="submit" title="Найти" icon="search" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(GetChatsPage)
