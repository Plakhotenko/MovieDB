import React, { Fragment } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import GuestRoute from '../GuestRoute'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'
import Lists from '../Lists'
import RootModal from '../RootModal'

const App = () => (
  <Fragment>
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
        <PrivateRoute
          component={Lists}
          path="/lists"
          exact
        />
      </Switch>
    </BrowserRouter>
    <RootModal />
  </Fragment>
)

export default App
