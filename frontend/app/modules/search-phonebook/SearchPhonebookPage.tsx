import { observer } from 'mobx-react'
import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import { useStore } from '../../hooks/useStore'
import styled from 'styled-components'
import JsonViewer from '../../components/JsonViewer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'

const Page = styled.div`
  padding: 10px 20px;
`

const SEARCH = {
  USER_SETTINGS: 'null',
  EXACT_SEARCH: 'true',
  FUZZY_SEARCH: 'false',
}

const SEARCH_FIELDS = [
  'public_name',
  'name',
  'company',
  'company_position',
  'office',
  'department',
  'manager',
  'description',
  'ad_login',
  'email',
]

const SearchPhonebookPage: FC = () => {
  const { searchPhonebookStore: store } = useStore()
  const [filter, setFilter] = useState('')
  const [exactSearch, setExactSearch] = useState(SEARCH.USER_SETTINGS)
  const [searchFields, setSearchFields] = useState(['public_name', 'name', 'email'])

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)

  const handleLocalSearch = () => store.searchLocalPhonebook(filter)

  const handleCorpSearch = () => {
    const exactMatch = exactSearch === SEARCH.USER_SETTINGS ? undefined : JSON.parse(exactSearch)
    store.searchCorpPhonebook(filter, exactMatch, searchFields)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setExactSearch(e.target.value)

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSearchFields([...searchFields, event.target.name])
    } else {
      setSearchFields(searchFields.filter(f => f != event.target.name))
    }
  }

  return (
    <Page>
      <FeatureHeader name="Поиск контактов" />
      Фильтр
      <Input onChange={handleFilterChange} value={filter} id="filter-text" />
      <br />
      <br />
      <i>Только для корпоративного поиска</i>
      <RadioButton
        id={SEARCH.USER_SETTINGS}
        checked={exactSearch === SEARCH.USER_SETTINGS}
        value={SEARCH.USER_SETTINGS}
        label="Поиск настраивается пользователем"
        onChange={handleSearchChange}
      />
      <RadioButton
        id={SEARCH.EXACT_SEARCH}
        checked={exactSearch === SEARCH.EXACT_SEARCH}
        value={SEARCH.EXACT_SEARCH}
        label="Поиск с точным совпадением"
        onChange={handleSearchChange}
      />
      <RadioButton
        id={SEARCH.FUZZY_SEARCH}
        checked={exactSearch === SEARCH.FUZZY_SEARCH}
        value={SEARCH.FUZZY_SEARCH}
        label="Мягкий поиск"
        onChange={handleSearchChange}
      />
      <br />
      <br />
      Поля поиска:
      <br />
      {SEARCH_FIELDS.map(field => (
        <Checkbox
          checked={searchFields.includes(field)}
          id={field}
          name={field}
          label={field}
          onChange={handleFieldChange}
        />
      ))}
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
