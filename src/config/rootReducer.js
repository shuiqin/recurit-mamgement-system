import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {registerReducer} from '../containers/Register/reducer'

const rootReducer =  combineReducers({
  registerReducer,
  routing: routerReducer
})

export default rootReducer