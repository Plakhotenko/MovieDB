import React from 'react'
import { Menu } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeaderOverlay = ({ logoutHandler }) => (
  <Menu>
    <Menu.Item>
      <Link to="/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/lists">My Lists</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/watchlist">Watchlist</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/favorites">Favorites</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={logoutHandler}>Logout</Menu.Item>
  </Menu>
)

HeaderOverlay.propTypes = {
  logoutHandler: PropTypes.func.isRequired
}

export default HeaderOverlay
