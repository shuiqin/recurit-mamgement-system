import React from 'react'
import {Router, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import Register from '../containers/Register'

const config = [{
  path: '/',
  component: Register,
  childRoutes: [
    {path: '/register',  name:'register', component: Register, pop: 'right', push:'left'}
  ]
}]

export const route = (history) => {
  return (
    <Router history={history} routes={config} render={applyRouterMiddleware(useScroll())}></Router>
  )
}

export default route