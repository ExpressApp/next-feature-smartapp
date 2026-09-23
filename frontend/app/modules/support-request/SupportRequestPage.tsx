import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import FeaturePage from '../../components/FeaturePage'
import Button from '../../components/Button'
import MainLoader from '../../components/MainLoader'
import { File } from '@expressms/smartapp-sdk/build/main/types'

const FileListItem = styled.div`
  padding: 4px 0 4px 16px;
  font-size: ${props => Math.round(props.theme.fontScale * 14)}px;
  color: var(--font-color);

  &::before {
    content: '📄 ';
  }
`

const SectionTitle = styled.div`
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: ${props => Math.round(props.theme.fontScale * 15)}px;
`

const SupportRequestPage: FC = () => {
  const { supportRequestStore: store } = useStore()

  const files = store.files

  const handleSendToBot = () => {
    store.sendFilesToBot()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Support Request" />
      <br />
      {!!files.length && (
        <>
          <SectionTitle>Файлы из support_request</SectionTitle>
          {files.map((file: File, index: number) => (
            <div key={file.fileId || index}>
              📎 {file.fileName || `Файл ${index + 1}`} ({file.fileSize} байт)
            </div>
          ))}
          <br />
          <Button onClick={handleSendToBot} title="Отправить боту" icon="send" disabled={store.isSendingToBot} />
          <br />
          <br />
        </>
      )}
      {store.archiveFiles !== null && (
        <>
          <SectionTitle>Файлы в архиве ({store.archiveFiles.length})</SectionTitle>
          {store.archiveFiles.map((fileName, index) => (
            <FileListItem key={index}>{fileName}</FileListItem>
          ))}
          <br />
        </>
      )}
      {store.data && <JsonViewer data={store.data?.payload} id="response" />}
      {store.isSendingToBot && <MainLoader />}
    </FeaturePage>
  )
}

export default observer(SupportRequestPage)
