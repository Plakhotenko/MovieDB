import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRouteComponent = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
)

PrivateRouteComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthorized: PropTypes.bool.isRequired
}

export default PrivateRouteComponent
