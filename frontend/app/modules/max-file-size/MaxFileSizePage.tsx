import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import JsonViewer from '../../components/JsonViewer'
import { observer } from 'mobx-react'

const MaxFileSizePage: FC = () => {
  const { maxFileSizeStore: store } = useStore()
  const [maxSize, setMaxSize] = useState('10000000')
  const [totalSize, setTotalSize] = useState('30000000')
  const [mime, setMime] = useState('')

  const handleMaxSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => setMaxSize(event.target.value)

  const handleTotalSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => setTotalSize(event.target.value)

  const handleMimeChange = (event: React.ChangeEvent<HTMLInputElement>) => setMime(event.target.value)

  const handleSubmit = () => {
    const maxSizeParsed = maxSize ? parseInt(maxSize, 10) : undefined
    const totalSizeParsed = totalSize ? parseInt(totalSize, 10) : undefined
    store.uploadFile(mime, maxSizeParsed, totalSizeParsed)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Ограничение размера файла" />
      Mime тип
      <Input onChange={handleMimeChange} value={mime} id="mime-type" />
      Размер одного файла в байтах
      <Input onChange={handleMaxSizeChange} value={maxSize} id="max-size" type="numeric" />
      Размер всех файлов в байтах
      <Input onChange={handleTotalSizeChange} value={totalSize} id="max-size" type="numeric" />
      <Button onClick={handleSubmit} id="submit" title="Прикрепить" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(MaxFileSizePage)
