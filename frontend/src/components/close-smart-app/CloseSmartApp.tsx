import { useDispatch } from 'react-redux'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { CLOSE_SMART_APP_FEATURE } from '../../constants'
import { closeSmartApp } from '../../redux/actions/client'
import './CloseSmartApp.scss'

function CloseSmartApp() {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(closeSmartApp())
  }

  return (
    <div className="feature-page">
      <FeaturePageHeader name={CLOSE_SMART_APP_FEATURE.name} />
      <div className='form-buttons'>
        <button
          className='btn--submit'
          onClick={handleSubmit}
          type='button'
          id='submit'
        >
          Закрыть SmartApp
        </button>
      </div>
    </div>
  )
}

export default CloseSmartApp
