import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { HANDLE_DEEPLINK_FEATURE } from '../../constants'
import { useState } from 'react'
import './HandleDeeplinkPage.scss'
import { handleDeeplink } from '../../redux/actions/client'
import { useDispatch } from 'react-redux'

export default function HandleDeeplinkPage() {
  const dispatch = useDispatch()
  const [deeplink, setDeeplink] = useState('')

  const handleDeeplinkChange = (event: any) => setDeeplink(event.target.value)

  const handleSubmit = () => dispatch(handleDeeplink(deeplink))

  return (
    <>
      <div className="feature-page">
        <FeaturePageHeader name={HANDLE_DEEPLINK_FEATURE.name} />
        <span className="feature-page__title">Deeplink</span>
        <div className="handle-deeplink-page">
          <input className="input" type="url" defaultValue={deeplink} onChange={handleDeeplinkChange} />
        </div>
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleSubmit} type="button" id="open-btn">
            Открыть
          </button>
          </div>
      </div>
    </>
  )
}
