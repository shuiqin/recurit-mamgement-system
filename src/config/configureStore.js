import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'
import {routerMiddleware} from 'react-router-redux'
import {hashHistory, browserHistory, HashRouter} from 'react-router'

const middleware = routerMiddleware(hashHistory)
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  middleware,
  createLogger()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState
  )
  if (module.hot) { //enable webpack hot module replacement for reducers
     module.hot.accept('./rootReducer', ()=>{
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
     })
  }
  return store
}