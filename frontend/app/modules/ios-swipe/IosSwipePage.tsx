import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'

const IosSwipePage: FC = () => {
  const { iosSwipeStore: store } = useStore()

  const handleToggle = () => {
    if (store.showIosSwipeToast) {
      store.unsubscribeIosSwipeEvent()
    } else {
      store.subscribeIosSwipeEvent()
    }
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Свайп на iOS" />
      <input
        className="checkbox"
        checked={store.showIosSwipeToast}
        type="checkbox"
        id="show-ios-toast"
        name="show-ios-toast"
        onChange={handleToggle}
      />
      <label htmlFor="show-ios-toast">Отображать событие свайпа на iOS</label>
    </FeaturePage>
  )
}

export default observer(IosSwipePage)
