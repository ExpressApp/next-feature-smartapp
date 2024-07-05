import React, { FC } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'

const HighLoad: FC = () => {
  const { highLoadStore: store } = useStore()

  const handleToggleHighLoadTest = () => {
    if (store.loadTestRunning) {
      store.stopLoadTest()
    } else {
      store.startLoadTest()
    }
  }

  return (
    <>
      RPS отправленных запросов
      <Input value={store.loadTestRequestRps} id="req-rps-text" disabled />
      RPS успешных ответов
      <Input value={store.loadTestResponseRps} id="resp-rps-text" disabled />
      Среднее время ответа
      <Input value={store.loadTestResponseTimeAvg} id="resp-avg-text" disabled />
      <Button
        onClick={handleToggleHighLoadTest}
        id="data-load"
        title={store.loadTestRunning ? 'Остановить тест' : 'Запуск нагрузочного теста'}
      />
    </>
  )
}

export default observer(HighLoad)
