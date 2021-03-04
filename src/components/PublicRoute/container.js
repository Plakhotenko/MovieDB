import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PublicRouteComponent from './component'

const PublicRoute = ({
  isAuthorized, restricted, ...rest
}) => (
  <PublicRouteComponent
    isAuthorized={isAuthorized}
    restricted={restricted}
    {...rest}
  />
)

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  isAuthorized: PropTypes.bool.isRequired
}

PublicRoute.defaultProps = {
  restricted: false
}

const mapStateToProps = state => ({
  isAuthorized: state.session.userIsAuthorized
})

export default connect(mapStateToProps)(PublicRoute)
