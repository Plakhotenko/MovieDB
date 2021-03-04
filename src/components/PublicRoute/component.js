import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PublicRouteComponent = ({
  component: Component,
  isAuthorized,
  restricted,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized && restricted
        ? <Redirect to="/dashboard" />
        : <Component {...props} />)}
  />
)

PublicRouteComponent.propTypes = {
  restricted: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
  isAuthorized: PropTypes.bool.isRequired
}

PublicRouteComponent.defaultProps = {
  restricted: false
}

const mapStateToProps = state => ({
  isAuthorized: state.session.userIsAuthorized
})

export default connect(mapStateToProps)(PublicRouteComponent)
