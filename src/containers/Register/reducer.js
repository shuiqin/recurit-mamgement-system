import {
  INIT_REGISTER,
  REGISTER
} from './constants'
const initialState = {

}
export const registerReducer = (state = initialState, action) => {
  switch(action.type){
    case INIT_REGISTER:
      return Object.assign({}, state,{})
    default:
      return state
  }
}