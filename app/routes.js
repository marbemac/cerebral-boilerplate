import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'

let routes = (
  <Route handler={App} path='/'>
    <Route name='login' handler={Login} />
    <Route name='register' handler={Register} />
    <DefaultRoute handler={Register} />
  </Route>
)

export default routes
