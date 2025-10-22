import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'

const BackgroundEventsPage: FC = () => {
  const { backgroundEventsStore: store } = useStore()
  const [started, setStarted] = useState(false)
  const [interval, setInterval] = useState('3000')

  const deliveryPercent = store.counterSent > 0 ? Math.round((100 * store.counterRecv) / store.counterSent) : 0

  const handleSubmit = () => {
    if (!started) {
      store.run(parseInt(interval, 10))
    } else {
      store.stop()
    }
    setStarted(!started)
  }

  const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(event.target.value)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Доставка событий в фоне" />
      <i>Тестирование доставки сообщений в фоне для iOS &gt;= 18.5</i>
      <br />
      <br />
      <br />
      Интервал отправки, мс
      <Input onChange={handleIntervalChange} type="number" value={interval} id="interval" disabled={started} />
      <Button
        onClick={handleSubmit}
        id="submit"
        title={started ? 'Стоп' : 'Старт'}
        icon={started ? 'stop' : 'play_arrow'}
      />
      <br />
      <br />
      {(started || store.counterSent > 0) && (
        <>
          <hr />
          Отправлено
          <Input value={store.counterSent} id="sent" disabled />
          Получено
          <Input value={store.counterRecv} id="recv" disabled />
          Успешных событий
          <Input value={`${deliveryPercent}%`} id="success" disabled />
        </>
      )}
    </FeaturePage>
  )
}

export default observer(BackgroundEventsPage)
