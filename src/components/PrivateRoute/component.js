import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isAuthorized } from '../../utils'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized()
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired
}

export default PrivateRoute
