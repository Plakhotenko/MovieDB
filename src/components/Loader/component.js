import React from 'react'
import { Row, Col, Spin } from 'antd'

const Loader = () => (
  <Row
    type="flex"
    justify="center"
  >
    <Col>
      <Spin />
    </Col>
  </Row>
)

export default Loader
