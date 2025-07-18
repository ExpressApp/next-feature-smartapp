import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import Buttons from '../../components/Buttons'
import FeaturePage from '../../components/FeaturePage'

const HideLogsPage: FC = () => {
  const { hideLogsStore: store } = useStore()
  const [hideSend, setHideSend] = useState(false)
  const [hideRecv, setHideRecv] = useState(false)

  const handleSendEvent = () => store.sendEvent(hideSend, hideRecv)

  const handleToggleSend = () => setHideSend(!hideSend)

  const handleToggleRecv = () => setHideRecv(!hideRecv)

  const handleHideNullRefEvent = () => store.handleHideNullRefEvent()

  const handleGenerateNullRefEvent = () => store.handleGenerateNullRefEvent()

  return (
    <FeaturePage>
      <FeatureHeader name="Скрытие данных в логах" />
      Cобытия от frontend
      <br />
      <br />
      <input
        className="checkbox"
        checked={hideSend}
        type="checkbox"
        id="hide-send"
        name="hide-send"
        onChange={handleToggleSend}
      />
      <label htmlFor="hide-send">скрыть отправляемые данные</label>
      <br />
      <br />
      <input
        className="checkbox"
        checked={hideRecv}
        type="checkbox"
        id="hide-recv"
        name="hide-recv"
        onChange={handleToggleRecv}
      />
      <label htmlFor="hide-recv">скрыть принимаемые данные</label>
      <br />
      <br />
      <Button onClick={handleSendEvent} id="submit" title="Отправить событие" icon="send" />
      <br />
      <br />
      <br />
      Cобытия от backend
      <br />
      <Buttons>
        <Button onClick={handleHideNullRefEvent} id="submit-hide" title="Выкл. логи" icon="close" />
        <Button onClick={handleGenerateNullRefEvent} id="submit-null-ref" title="Событие" icon="send" />
      </Buttons>
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(HideLogsPage)
