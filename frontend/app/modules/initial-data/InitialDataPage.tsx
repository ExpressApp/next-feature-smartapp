import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import FeaturePage from '../../components/FeaturePage'
import Button from '../../components/Button'
import { File } from '@expressms/smartapp-sdk/build/main/types'

const InitialDataPage: FC = () => {
  const { initialDataStore: store } = useStore()

  const initialData = store.data?.payload.initialData
  const files = (initialData?.initiator === 'menu_action' && initialData.meta.files) || []

  const handleOpenFile = (file: File) => {
    store.openFile(file)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Данные инициализации SmartApp" />
      <br />
      {!!files.length && (
        <>
          Файлы
          {files.map((file: File) => (
            <div key={file.fileId}>
              <Button onClick={() => handleOpenFile(file)} title={file.fileName || ''} icon="download" />
            </div>
          ))}
          <br />
          <br />
        </>
      )}
      {store.data && <JsonViewer data={store.data?.payload} id="response" />}
    </FeaturePage>
  )
}

export default InitialDataPage
