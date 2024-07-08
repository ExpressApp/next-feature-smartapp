import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import HighLoad from './HighLoad'
import SyncRequestChart from './SyncRequestChart'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const SyncRequestPage: FC = () => {
  const { syncRequestStore: store } = useStore()

  const handleTogglePerfTest = () => {
    if (store.perfTestRunning) {
      store.stopPerformanceTest()
    } else {
      store.startPerformanceTest()
    }
  }

  const handleSyncRequest = () => {
    store.sendAppEvent(true)
  }

  const handleAsyncRequest = () => {
    store.sendAppEvent(false)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Синхронный запрос" />
      Тайминги запросов
      <SyncRequestChart width="100%" height="300px" data={store.perfTestResults} />
      <Button
        onClick={handleTogglePerfTest}
        id="run-test"
        title={
          store.perfTestRunning ? `[${store.perfTestProgress}%] Остановить тест` : 'Запуск теста таймингов запросов'
        }
      />
      <br />
      <br />
      <hr />
      <br />
      Выполнить запрос вручную
      <Buttons>
        <Button onClick={handleSyncRequest} id="sync-btn" title="Синхронный" />
        <Button onClick={handleAsyncRequest} id="async-btn" title="Асинхронный" />
      </Buttons>
      <br />
      {store.response && (
        <>
          <JsonViewer data={store.response} id="response" />
          <br />
        </>
      )}
      <hr />
      <br />
      <HighLoad />
    </FeaturePage>
  )
}

export default observer(SyncRequestPage)
