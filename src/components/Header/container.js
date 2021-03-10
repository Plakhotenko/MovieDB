import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HeaderComponent from './component'
import { logoutUser, getUserData } from '../../store/features/session/action'

class Header extends Component {
  componentDidMount() {
    const { getUserDataHandler } = this.props
    getUserDataHandler()
  }

  render() {
    const { username, logoutHandler } = this.props
    return (
      <HeaderComponent
        username={username}
        logoutHandler={logoutHandler}
      />
    )
  }
}

Header.propTypes = {
  username: PropTypes.string,
  logoutHandler: PropTypes.func.isRequired,
  getUserDataHandler: PropTypes.func.isRequired
}

Header.defaultProps = {
  username: undefined
}

const mapStateToProps = state => ({
  username: state.session.username
})

const mapDispatchToProps = {
  logoutHandler: logoutUser,
  getUserDataHandler: getUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
