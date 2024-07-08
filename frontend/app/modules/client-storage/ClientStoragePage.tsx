import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import styled from 'styled-components'

const Textarea = styled.textarea`
  padding: 12px 20px;
  width: calc(100% - 40px);
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  font-size: 14px;
  background-color: var(--input-bg);
  color: var(--font-color);
`

const ClientStoragePage: FC = () => {
  const { clientStorageStore: store } = useStore()
  const [key, setKey] = useState('key1')
  const [value, setValue] = useState(
    JSON.stringify(
      {
        string1: 'test string',
        number1: 123.456,
        boolean1: false,
        null1: null,
        array1: [1, true, 'text'],
        object1: {
          param1: 'val1',
        },
      },
      null,
      2
    )
  )

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => setKey(event.target.value)

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)

  const handleSave = () => {
    store.clientStorageSet(key, JSON.parse(value))
  }

  const handleLoad = () => {
    store.clientStorageGet(key)
  }

  const handleRemove = () => {
    store.clientStorageRemove(key)
  }

  const handleClear = () => {
    store.clientStorageClear()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Защищенное храниище" />
      Сохранение записи
      <Input onChange={handleKeyChange} value={key} id="key1-text" />
      <Textarea onChange={handleValueChange} id="json-text-save" value={value} rows={10} />
      <Button onClick={handleSave} id="data-save" title="Сохранить" icon="file_download" />
      <br />
      <br />
      <hr />
      <br />
      Получение записи
      <Input onChange={handleKeyChange} value={key} id="key2-text" />
      <Textarea id="json-text-load" value={store.valueFromStorage} rows={10} />
      <Button onClick={handleLoad} id="data-load" title="Загрузить" icon="file_upload" />
      <br />
      <br />
      <hr />
      <br />
      Удаление записи
      <Input onChange={handleKeyChange} value={key} id="key3-text" />
      <Button onClick={handleRemove} id="data-remove" title="Удалить" icon="close" />
      <br />
      <br />
      <hr />
      <br />
      Очистка базы
      <br />
      <Button onClick={handleClear} id="data-clear" title="Очистить" icon="playlist_remove" />
    </FeaturePage>
  )
}

export default observer(ClientStoragePage)
