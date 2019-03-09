
import './index.css';
import "antd-mobile/dist/antd-mobile.css";   // 引入官方提供的 less 样式入口文件
import * as serviceWorker from './serviceWorker';



import React from 'react';

import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import route from './config/route'
import configureStore from './config/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'
import {hashHistory} from 'react-router'
const store = configureStore()
//import "your-theme-file.less";   // 用于覆盖上

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//添加global订阅时间
store.subscribe(() => {
  //console.log(store.getState())
})
//import logo from './logo.svg';
//import './App.css';

const history = syncHistoryWithStore(hashHistory, store)
history.listen (location => {

})

ReactDOM.render(
  <Provider store={store}>{route(history)}</Provider>,
  document.getElementById('app')
)