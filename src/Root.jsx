import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducer'

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function Root () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
