import React from 'react'
import PropTypes from 'prop-types'
import {
  Col, Card, Typography
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const ListComponent = ({
  title, description, onClick
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
          aria-label="delete list"
          key="delete"
          onClick={onClick}
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

ListComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

ListComponent.defaultProps = {
  title: undefined,
  description: undefined
}

export default ListComponent
