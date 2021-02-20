import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './components/App'

import configureStore from './store/configureStore'
import './assets/styles/app.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') || document.createElement('div')
)
