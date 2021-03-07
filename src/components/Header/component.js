import React from 'react'
import {
  Typography, Row, Col, Avatar, Dropdown, Layout
} from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import HeaderOverlay from '../HeaderOverlay'

const HeaderComponent = ({ username, logoutHandler }) => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Dropdown overlay={() => <HeaderOverlay logoutHandler={logoutHandler} />}>
          <Typography.Text>
            <Avatar icon={(<UserOutlined />)} />
            {' '}
            <span className="hide-sm-down">{username}</span>
            {' '}
            <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

HeaderComponent.propTypes = {
  username: PropTypes.string,
  logoutHandler: PropTypes.func.isRequired
}

HeaderComponent.defaultProps = {
  username: undefined
}

export default HeaderComponent
