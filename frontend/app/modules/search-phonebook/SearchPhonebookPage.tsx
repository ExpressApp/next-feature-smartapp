import { observer } from 'mobx-react'
import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import { useStore } from '../../hooks/useStore'
import styled from 'styled-components'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Page = styled.div`
  padding: 10px 20px;
`

const SearchPhonebookPage: FC = () => {
  const { searchPhonebookStore: store } = useStore()
  const [filter, setFilter] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)

  const handleLocalSearch = () => store.searchLocalPhonebook(filter)

  const handleCorpSearch = () => store.searchCorpPhonebook(filter)

  return (
    <Page>
      <FeatureHeader name="Поиск контактов" />
      Фильтр
      <Input onChange={handleChange} value={filter} id="filter-text" />
      <Button onClick={handleCorpSearch} id="corp-submit" icon="cases" title="Корпоративный поиск контактов" />
      <Button onClick={handleLocalSearch} id="local-submit" icon="phone_iphone" title="Локальный поиск контактов" />
      <br />
      <br />
      {store.phonebook && <JsonViewer data={store.phonebook} id="response" />}
    </Page>
  )
}

export default observer(SearchPhonebookPage)
