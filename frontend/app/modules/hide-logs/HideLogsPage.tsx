import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const HideLogsPage: FC = () => {
  const { hideLogsStore: store } = useStore()
  const [hideSend, setHideSend] = useState(false)
  const [hideRecv, setHideRecv] = useState(false)

  const handleSubmit = () => store.sendEvent(hideSend, hideRecv)

  const handleToggleSend = () => setHideSend(!hideSend)

  const handleToggleRecv = () => setHideRecv(!hideRecv)

  return (
    <FeaturePage>
      <FeatureHeader name="Скрытие данных в логах" />
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
      <Button onClick={handleSubmit} id="submit" title="Отправить событие" icon="send" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(HideLogsPage)
