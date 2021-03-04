import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PrivateRouteComponent from './component'

const PrivateRoute = ({ isAuthorized, ...rest }) => (
  <PrivateRouteComponent
    isAuthorized={isAuthorized}
    {...rest}
  />
)

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthorized: state.session.userIsAuthorized
})

export default connect(mapStateToProps)(PrivateRoute)
