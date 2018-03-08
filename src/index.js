import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import { reducer } from './redux'
import { watcherSaga } from './sagas'
import Routes from './routes/routes'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// run the saga
sagaMiddleware.run(watcherSaga)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
