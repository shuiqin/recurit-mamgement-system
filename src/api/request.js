//es6 promise polyfill
import Promise from 'es6-promise'
import axios from 'axios'


let getBaseUrl = () => {
  let baseURL = '${location.origin}/api' //TODO
  if (process.env.NODE_ENV != 'production'){
    baseURL = '${location.origin}/api' //TODO
  } else {
    baseURL = '${location.origin}/api' //TODO
  }
  return baseURL
}

class Request{
  constructor(params) {
    this._axios =   axios.create({
      baseURL: getBaseUrl()
    })
  }

  /*设置请求头
  @param {Object} header 请求头
  */
  setHeaders(headers) {
    Object.keys(headers).forEach(key => {
      this._axios.defaults.headers[key] = headers[key]
    })
  }

  /**
   * 发送get请求
   * @param{String} url地址
   * @param{Object} query查询参数
   * @return json数据
   */
  get (url, query = {}){
    return this._request('get')(url, query)
  }

   /**
   * 发送post请求
   * @param{String} url地址
   * @param{Object} body 请求主体
   * @return json数据
   */
  post (url, body = {}){
    return this._request('post')(url, body)
  }

  _request(method) {
    return (url, data) => {
      if (process.env.NODE_ENV !== 'production'){ //环境判断

      }
      let config = {
        url,
        method
      }
      if (method === 'get'){
        config.params = data
      } else {
        config.data = data
      }

      return new Promise((resolve, reject) => {
        this._axios.request(config)
        .then(response => {
          let sessionTimeoutTag = response.headers['session-timeout-tag']
          if (String(sessionTimeoutTag) === 'true') {
            if (window.parent && window.parent.location) {
              window.parent.location.reload()
            }
          }
          return response
        })
        .then(response => {
          if (response.status === 200){
            resolve({...response.data})
          } else {
            //reject()
          }
        })
        .catch(err => {reject(err)})
      })
    }
  }
}

export default new Request()