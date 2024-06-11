import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { IOS_SWIPE } from '../../constants'
import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { setShowIosSwipeToast } from '../../redux/actions/ui'

function IosSwipeToggler() {
  const dispatch = useDispatch()

  const showIosSwipeToast = useSelector<AppState, boolean>((state) => state.ui.showIosSwipeToast)

  const handleToggle = () => dispatch(setShowIosSwipeToast(!showIosSwipeToast))

  return (
    <div className="feature-page">
      <FeaturePageHeader name={IOS_SWIPE.name} />
      <div className="form-buttons">
        <input className="checkbox" checked={showIosSwipeToast} type="checkbox" id="show-ios-toast" name="show-ios-toast" onClick={handleToggle} />
        <label className="checkbox__label" htmlFor="show-ios-toast">Show iOS swipe events</label>
      </div>
    </div>
  )
}

export default IosSwipeToggler
