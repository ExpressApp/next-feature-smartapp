import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import JsonViewer from '../../components/JsonViewer'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { FILE_MEDIA_QUALITY } from '@expressms/smartapp-sdk/build/main/types'
import { BotFilesMethods } from './media-quality-types'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  
  button {
    font-size: 12px;
  }
`

const Select = styled.select`
  padding: 12px 20px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid var(--light-grey);
  border-radius: 3px;
  font-size: 14px;
  color: var(--font-color);
  box-sizing: border-box;
  background-color: var(--input-bg);
`

const MediaQualityPage: FC = () => {
  const { mediaQualityStore: store } = useStore()

  const [qualityType, setMediaQualityType] = useState<FILE_MEDIA_QUALITY>(FILE_MEDIA_QUALITY.LOW)

  const handleUploadFilesClick = (method: BotFilesMethods) => {
    store.callBotFileMethod({ method, mediaQuality: qualityType })
  }

  const handleMediaQualityTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setMediaQualityType(event.target.value as FILE_MEDIA_QUALITY)

  return (
    <FeaturePage>
      <FeatureHeader name="Качество сжатия" />
      <Buttons>
        <Button onClick={() => handleUploadFilesClick(BotFilesMethods.ECHO_FILE)} id="submit" title="Прикрепить файл" />
        <Button
          onClick={() => handleUploadFilesClick(BotFilesMethods.ECHO_FILES)}
          id="submit"
          title="Прикрепить файлы"
        />
      </Buttons>
      <Select className="input" onChange={handleMediaQualityTypeChange} defaultValue={qualityType} id="type-select">
        <option value={FILE_MEDIA_QUALITY.LOW}>{FILE_MEDIA_QUALITY.LOW}</option>
        <option value={FILE_MEDIA_QUALITY.MEDIUM}>{FILE_MEDIA_QUALITY.MEDIUM}</option>
        <option value={FILE_MEDIA_QUALITY.HIGH}>{FILE_MEDIA_QUALITY.HIGH}</option>
      </Select>
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(MediaQualityPage)
