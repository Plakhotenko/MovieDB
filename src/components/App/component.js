import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Login from '../../pages/Login'

const AppComponent = ({ userIsAuthorized }) => (
  <BrowserRouter>
    <Route
      exact
      path="/login"
      component={Login}
    />
    {!userIsAuthorized && <Redirect to="/login" />}
  </BrowserRouter>
)

AppComponent.propTypes = {
  userIsAuthorized: PropTypes.bool
}

AppComponent.defaultProps = {
  userIsAuthorized: false
}

export default AppComponent
