import React from 'react'
import PropTypes from 'prop-types'
import {
  Col, Card, Typography
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const List = ({
  title, description, id, onClickHandler
}) => (
  <Col
    xs={{ span: 24 }}
    sm={{ span: 12 }}
    md={{ span: 8 }}
    lg={{ span: 8 }}
    xl={{ span: 6 }}
  >
    <Card
      hoverable
      className="top-margin"
      actions={[
        <DeleteOutlined
          key="delete"
          onClick={() => onClickHandler(id)}
        />
      ]}
    >
      <Typography.Title level={4}>
        {title}
      </Typography.Title>
      {description}
    </Card>
  </Col>
)

List.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

List.defaultProps = {
  title: undefined,
  description: undefined
}

export default List
