import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { CREATE_DEEPLINK } from '../../constants'
import classNames from 'classnames'
import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { createDeeplink } from '../../redux/actions/client'
import { useState } from 'react'

const initMeta = [
  { key: 'route', value: '/send-email' },
  { key: 'email', value: 'test@mail.ru' },
]

function CreateDeeplink() {
  const dispatch = useDispatch()
  const [appId, setAppId] = useState('email-smartapp')
  const [metaJson, setMetaJson] = useState(JSON.stringify(initMeta, null, 2))

  const deeplinkUrl = useSelector<AppState, string>(state => state.client.deeplinkUrl)

  const handleSubmit = () => dispatch(createDeeplink(appId, JSON.parse(metaJson)))

  const handleAppIdChange = e => setAppId(e.target.value)

  const handleMetaChange = e => setMetaJson(e.target.value)

  return (
    <div className="feature-page">
      <FeaturePageHeader name={CREATE_DEEPLINK.name} />
      <span className="feature-page__title">App ID</span>
      <div className="form-buttons">
        <input className="input" onChange={handleAppIdChange} value={appId} type="text" id="app-id-text" />
      </div>
      <span className="feature-page__title">Meta</span>
      <div className="form-buttons">
        <textarea className="input" onChange={handleMetaChange} id="meta-text" rows={10} value={metaJson} />
      </div>
      <span className="feature-page__title">Deeplink</span>
      <input className="input" disabled value={deeplinkUrl} id="deeplink-text" />
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleSubmit}
          id="submit"
        >
          Сгенерировать ссылку
        </button>
      </div>
    </div>
  )
}

export default CreateDeeplink
