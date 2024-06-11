import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { LAYOUT_TYPE_FEATURE } from '../../constants'
import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { getLayoutType, subscribeLayoutType, unsubscribeLayoutType } from '../../redux/actions/client'
import { useLayoutEffect } from 'react'

function LayoutTypePage() {
  const dispatch = useDispatch()

  const layoutType = useSelector<AppState>(state => state.client.layoutType)

  useLayoutEffect(() => {
    dispatch(getLayoutType())
    dispatch(subscribeLayoutType())

    return () => {
      dispatch(unsubscribeLayoutType())
    }
  }, [dispatch])

  return (
    <div className="feature-page file-proxy">
      <FeaturePageHeader name={LAYOUT_TYPE_FEATURE.name} />
      <span className="feature-page__title">Текущий размер окна</span>
      <input className="input" value={`${layoutType}`} type="text" id="layout-type-text" disabled />
    </div>
  )
}

export default LayoutTypePage
