import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'

const App = ({ userIsAuthorized }) => (
  <BrowserRouter>
    <Route
      exact
      path="/login"
      component={LoginForm}
    />
    {!userIsAuthorized && <Redirect to="/login" />}
  </BrowserRouter>
)

App.propTypes = {
  userIsAuthorized: PropTypes.bool
}

App.defaultProps = {
  userIsAuthorized: false
}

export default App
