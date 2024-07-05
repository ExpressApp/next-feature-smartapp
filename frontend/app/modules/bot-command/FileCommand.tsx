import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../hooks/useStore'
import { BotCommandPageProps } from './bot-command.types'
import Button from '../../components/Button'
import RemoveIcon from '../../assets/clear-input.svg'
import JsonViewer from '../../components/JsonViewer'
import styled from 'styled-components'

const FileDiv = styled.div`
  display: flex;
  margin-bottom: 6px;

  & > svg {
    margin-left: 10px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }

  & > span {
    margin-right: 6px;
  }
`

const FileCommand: FC<BotCommandPageProps> = ({ botFeature }) => {
  const { botCommandStore: store } = useStore()
  const isSingleFile = !botFeature.method.includes('files')

  useEffect(() => {
    return () => {
      store.clearFiles()
      store.clearResponse()
    }
  }, [])

  const handleAddFiles = () => {
    store.clearFiles()
    store.clearResponse()
    if (isSingleFile) {
      store.uploadFile()
    } else {
      store.uploadFiles()
    }
  }

  const removeFile = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    // @ts-expect-error: cast error
    const fileId = e.target.parentElement.id
    fileId && store.removeFile(fileId)
  }

  const handleSubmit = () => {
    store.sendFileAppEvent(botFeature.method)
  }

  return (
    <>
      <Button title={isSingleFile ? 'Прикрепить файл' : 'Прикрепить файлы'} onClick={handleAddFiles} />
      <br />
      <br />
      {store.files.map(file => (
        <FileDiv key={file.fileId} id={file.fileId}>
          {file.fileName}
          <RemoveIcon onClick={removeFile} />
        </FileDiv>
      ))}
      <br />
      {!!store.filesResponse.length &&
        store.filesResponse.map(({ attr, value }, idx) => (
          <FileDiv key={idx}>
            <span>{attr}:</span>
            <b>{value}</b>
          </FileDiv>
        ))}
      <br />
      <Button onClick={handleSubmit} id="submit" title="Отправить" icon="send" disabled={!store.files.length} />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </>
  )
}

export default observer(FileCommand)
