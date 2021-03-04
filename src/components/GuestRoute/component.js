import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const GuestRouteComponent = ({
  component: Component,
  isAuthorized,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized
        ? <Redirect to="/dashboard" />
        : <Component {...props} />)}
  />
)

GuestRouteComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthorized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthorized: state.session.userIsAuthorized
})

export default connect(mapStateToProps)(GuestRouteComponent)
