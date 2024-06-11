import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { CONNECTION_STATUS } from '../../constants'
import classNames from 'classnames'
import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectionIcon } from './ConnectionIcon'
import { getConnectionStatus, subscribeConnectionStatus, unsubscribeConnectionStatus } from '../../redux/actions/client'

function ConnectionStatus() {
  const dispatch = useDispatch()

  const connectionStatus = useSelector<AppState>(state => state.client.connectionStatus)
  const subscribedConnectionStatus = useSelector<AppState>(state => state.client.subscribedConnectionStatus)

  const handleGetConnectionStatus = () => dispatch(getConnectionStatus())

  const handleSubscribeConnectionStatus = () => dispatch(subscribeConnectionStatus())

  const handleUnsubscribeConnectionStatus = () => dispatch(unsubscribeConnectionStatus())

  return (
    <div className="feature-page file-proxy">
      <FeaturePageHeader name={CONNECTION_STATUS.name} />
      <h4>Запрос статуса</h4>
      <div className="form-buttons" id="get-status-txt">
        <ConnectionIcon connectionStatus={connectionStatus} />
      </div>
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleGetConnectionStatus}
          id="get-status-btn"
        >
          Проверить статус
        </button>
      </div>
      <br />
      <h4>Подписка на изменение статуса</h4>
      <div className="form-buttons" id="subscription-status-txt">
        <ConnectionIcon connectionStatus={subscribedConnectionStatus} />
      </div>
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleSubscribeConnectionStatus}
          id="subscribe-btn"
        >
          Подписаться
        </button>
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleUnsubscribeConnectionStatus}
          id="unsubscribe-btn"
        >
          Отписаться
        </button>
      </div>
    </div>
  )
}

export default ConnectionStatus
