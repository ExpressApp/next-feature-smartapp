import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Button from '../../components/Button'
import MainLoader from '../../components/MainLoader'
import DownloadProgress from './DownloadProgress'
import { formatBytes } from './file-download.helpers'
import { DownloadFileItem } from './file-download.types'

const SectionTitle = styled.div`
  padding-top: 16px;
  font-size: ${props => Math.round(props.theme.fontScale * 15)}px;
  font-weight: 700;
`

const Caption = styled.div`
  padding-top: 16px;
  font-size: ${props => Math.round(props.theme.fontScale * 12)}px;
  opacity: 0.7;
`

const FilesRow = styled.div`
  display: block;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
  padding-top: 8px;
  font-size: ${props => Math.round(props.theme.fontScale * 14)}px;
`

const FileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const FileDownloadPage: FC = () => {
  const { fileDownloadStore: store } = useStore()
  const {
    isDownloadingAll,
    existingFiles,
    totalBytes,
    isProgressVisible,
    overallProgress,
    loadedBytes,
    completedFileIds,
    isFilesPreparing,
  } = store;

  useEffect(() => {
    store.prepareFiles()
    store.subscribeProgress()

    return () => {
      store.abortDownloads()
      store.unsubscribeProgress()
    }
  }, [])

  const handleDownloadAll = () => {
    if (isDownloadingAll) {
      store.stopAll()
      return
    }

    store.downloadAll()
  }

  const handleDownloadRandom = () => store.downloadRandomFile()

  const renderFileControl = (item: DownloadFileItem) => {
    if (store.isFileActive(item)) {
      return (
        <>
          <Button onClick={() => store.stopFile(item)} id={`stop-${item.key}`} title="Стоп" icon="stop" />
          {item.name} — {store.fileProgressOf(item)}%
        </>
      )
    }

    return (
      <>
        {!store.isFileCompleted(item) &&
          <Button onClick={() => store.stopFile(item)} id={`stop-${item.key}`} title="Скачать" icon="download"/>
        }
        {item.name}
        ({formatBytes(item.size)}){store.isFileCompleted(item) ? ' ✓' : ''}
      </>
    )
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Скачивание файлов" />

      <SectionTitle>Файлы</SectionTitle>
      <FilesRow>
        {existingFiles.map(file => (<FileItem key={file.key}>{renderFileControl(file)}</FileItem>))}
      </FilesRow>
      <Caption>
        Всего {existingFiles.length} файла, {formatBytes(totalBytes)}
      </Caption>
      <Button
        onClick={handleDownloadAll}
        id="download-all"
        title={isDownloadingAll ? 'Остановить все' : 'Скачать все'}
        icon={isDownloadingAll ? 'stop' : 'download'}
      />

      {isProgressVisible && (
        <DownloadProgress
          percent={overallProgress}
          loadedBytes={loadedBytes}
          totalBytes={totalBytes}
          completedFiles={completedFileIds.length}
          totalFiles={existingFiles.length}
        />
      )}

      <br/>
      <br/>
      <SectionTitle>Несуществующий файл</SectionTitle>
      <Button
        onClick={handleDownloadRandom}
        id="download-random"
        title="Скачать"
        icon="download"
      />

      {isFilesPreparing && <MainLoader />}
    </FeaturePage>
  )
}

export default observer(FileDownloadPage)
