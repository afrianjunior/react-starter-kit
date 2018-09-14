import React from 'react'
import App from './app/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducer'

const devTool = window => {
  if (process.env.NODE_ENV === 'development') return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  rootReducer,
  devTool(window),
  applyMiddleware(reduxThunk)
)

export default function Root () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
