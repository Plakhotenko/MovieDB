import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import GuestRoute from '../GuestRoute'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'


const App = () => (
  <BrowserRouter>
    <Switch>
      <GuestRoute
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
