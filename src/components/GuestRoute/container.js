import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GuestRouteComponent from './component'

const GuestRoute = ({
  isAuthorized, ...rest
}) => (
  <GuestRouteComponent
    isAuthorized={isAuthorized}
    {...rest}
  />
)

GuestRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthorized: state.session.userIsAuthorized
})

export default connect(mapStateToProps)(GuestRoute)
