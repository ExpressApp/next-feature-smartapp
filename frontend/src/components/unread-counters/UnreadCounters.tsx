import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { UNREAD_COUNTER_FEATURE } from '../../constants'
import classNames from 'classnames'
import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { getUnreadCounter, setUnreadCounter, subscribeUnreadCounter, unsubscribeUnreadCounter } from '../../redux/actions/client'
import { useState } from 'react'
import { SubscriptionPayload } from '@expressms/smartapp-sdk/build/main/types'

const TYPES = ['user', 'chat', 'smartapp']

function UnreadCountersPage() {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [type, setType] = useState(TYPES[0] as SubscriptionPayload['type'])

  const unreadCounter = useSelector<AppState>(state => state.client.unreadCounter)

  const handleIdChange = (event) => setId(event.target.value)

  const handleTypeChange = (event) => setType(event.target.value)

  const handleSubscribe = () => dispatch(subscribeUnreadCounter(id, type))
  
  const handleUnsubscribe = () => dispatch(unsubscribeUnreadCounter(id, type))

  const handleGetUnreadCounter = () => {
    dispatch(setUnreadCounter(-1))
    dispatch(getUnreadCounter(id, type))
  }

  return (
    <div className="feature-page file-proxy">
      <FeaturePageHeader name={UNREAD_COUNTER_FEATURE.name} />
      <span className="feature-page__title">Тип</span>
      <div className="form-buttons">
        <select className="input" onChange={handleTypeChange} defaultValue={type} id="type-select">
          {TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <span className="feature-page__title">ID</span>
      <div className="form-buttons">
        <input className="input" onChange={handleIdChange} value={id} type="text" id="id-text" />
      </div>
      {unreadCounter !== -1 && (
        <>
          <span className="feature-page__title">Каунтер</span>
          <input className="input" value={unreadCounter.toString()} type="text" id="counter-text" disabled />
        </>
      )}
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleGetUnreadCounter}
          id="get-status-btn"
        >
          Запросить каунтер
        </button>
      </div>
      <br/><br/>
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleSubscribe}
          id="subscribe-btn"
        >
          Подписаться
        </button>
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleUnsubscribe}
          id="unsubscribe-btn"
        >
          Отписаться
        </button>
      </div>
    </div>
  )
}

export default UnreadCountersPage
