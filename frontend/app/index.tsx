import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './modules/app/App'
import { StoreProvider } from './store/storeProvider'

module?.hot?.accept()

const container = document.getElementById('root')
const root = window.__REACT_ROOT__ || createRoot(container!)
if (module?.hot) {
  window.__REACT_ROOT__ = root
}

root.render(
  <StoreProvider>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StoreProvider>
)
