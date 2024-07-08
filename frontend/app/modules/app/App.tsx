import React, { useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Toast from '../toast/Toast'
import FeaturesListPage from '../features-list/FeaturesListPage'
import Version from '../../components/Version'
import Theme from '../theme/Theme'

const App = () => {
  const { appStore: store } = useStore()
  const location = useLocation()

  useEffect(() => {
    store.sendReady()
    store.subscribeBridgeOnReceive()
  }, [])

  useEffect(() => {
    store.handleLocationChange(location.pathname)
  }, [location])

  return (
    <div className="feature-smartapp">
      <Theme />
      <Toast />
      <FeaturesListPage />
      <Version />
    </div>
  )
}

export default observer(App)
