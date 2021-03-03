import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import PublicRoute from '../PublicRoute'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'


const App = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute
        restricted
        component={LoginForm}
        path="/login"
        exact
      />
      <PrivateRoute
        component={Dashboard}
        path="/dashboard"
        exact
      />
    </Switch>
  </BrowserRouter>
)

export default App
