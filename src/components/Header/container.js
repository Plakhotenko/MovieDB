import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HeaderComponent from './component'
import { logoutUser, getUserData } from '../../store/features/session/action'

class Header extends Component {
  componentDidMount() {
    const { getUserDataHadler } = this.props
    getUserDataHadler()
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
  getUserDataHadler: PropTypes.func.isRequired
}

Header.defaultProps = {
  username: undefined
}

const mapStateToProps = state => ({
  username: state.session.username
})

const mapDispatchToProps = {
  logoutHandler: logoutUser,
  getUserDataHadler: getUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
