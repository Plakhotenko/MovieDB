import React, { Fragment } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import GuestRoute from '../GuestRoute'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'
import Favorites from '../Favorites'
import Watchlist from '../Watchlist'
import Lists from '../Lists'
import ModalRoot from '../ModalRoot'

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
        <PrivateRoute
          component={Watchlist}
          path="/watchlist"
          exact
        />
        <PrivateRoute
          component={Favorites}
          path="/favorites"
          exact
        />
      </Switch>
    </BrowserRouter>
    <ModalRoot />
  </Fragment>
)

export default App
