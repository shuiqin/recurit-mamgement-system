import {
  INIT_REGISTER,
  REGISTER
} from './constants'
import request from '../../api/request'

export const initRegister = ()=> {
  return {
    type: INIT_REGISTER
  }
}

export const register  = (params) => {
  return (dispatch, getState) => {
    request.post('./register', params).then(rsp => {
      dispatch({
        type: REGISTER,
        payload: rsp
      })
    })
  }
}