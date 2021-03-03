import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isAuthorized } from '../../utils'

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized() && restricted
        ? <Redirect to="/dashboard" />
        : <Component {...props} />)}
  />
)

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  component: PropTypes.element.isRequired
}

PublicRoute.defaultProps = {
  restricted: false
}

export default PublicRoute
