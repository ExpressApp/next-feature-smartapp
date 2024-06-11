import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Main from './components/Main'
import { configureStore } from './redux/configureStore'
import { history } from './redux/history'
import './index.scss'
import { setupTheme } from './helpers'

if ((module as any).hot) (module as any).hot.accept()

setupTheme()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      {/* @ts-ignore */}
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)