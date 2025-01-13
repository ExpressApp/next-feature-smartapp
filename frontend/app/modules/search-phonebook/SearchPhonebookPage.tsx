import { observer } from 'mobx-react'
import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import { useStore } from '../../hooks/useStore'
import styled from 'styled-components'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'

const Page = styled.div`
  padding: 10px 20px;
`

const SEARCH = {
  USER_SETTINGS: 'null',
  EXACT_SEARCH: 'true',
  FUZZY_SEARCH: 'false',
}

const SearchPhonebookPage: FC = () => {
  const { searchPhonebookStore: store } = useStore()
  const [filter, setFilter] = useState('')
  const [exactSearch, setExactSearch] = useState(SEARCH.USER_SETTINGS)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)

  const handleLocalSearch = () => store.searchLocalPhonebook(filter)

  const handleCorpSearch = () => {
    const exactSearchMapped = exactSearch === SEARCH.USER_SETTINGS ? undefined : JSON.parse(exactSearch)
    store.searchCorpPhonebook(filter, exactSearchMapped)
  }

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setExactSearch(e.target.value)

  return (
    <Page>
      <FeatureHeader name="Поиск контактов" />
      Фильтр
      <Input onChange={handleChange} value={filter} id="filter-text" />
      <br />
      <br />
      <i>Только для корпоративного поиска</i>
      <RadioButton
        id={SEARCH.USER_SETTINGS}
        checked={exactSearch === SEARCH.USER_SETTINGS}
        value={SEARCH.USER_SETTINGS}
        label="Поиск настраивается пользователем"
        onChange={onChangeSearch}
      />
      <RadioButton
        id={SEARCH.EXACT_SEARCH}
        checked={exactSearch === SEARCH.EXACT_SEARCH}
        value={SEARCH.EXACT_SEARCH}
        label="Поиск с точным совпадением"
        onChange={onChangeSearch}
      />
      <RadioButton
        id={SEARCH.FUZZY_SEARCH}
        checked={exactSearch === SEARCH.FUZZY_SEARCH}
        value={SEARCH.FUZZY_SEARCH}
        label="Мягкий поиск"
        onChange={onChangeSearch}
      />
      <br />
      <Button onClick={handleCorpSearch} id="corp-submit" icon="cases" title="Корпоративный поиск контактов" />
      <Button onClick={handleLocalSearch} id="local-submit" icon="phone_iphone" title="Локальный поиск контактов" />
      <br />
      <br />
      {store.phonebook && <JsonViewer data={store.phonebook} id="response" />}
    </Page>
  )
}

export default observer(SearchPhonebookPage)
