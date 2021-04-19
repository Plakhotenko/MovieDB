import React from 'react'
import PropTypes from 'prop-types'
import {
  Col, Card, Typography
} from 'antd'
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'

const ListComponent = ({
  title, description, onClick, id
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
      <Link to={`list/${id}`}>
        <Typography.Title level={4}>
          {title}
        </Typography.Title>
        {description}
      </Link>
    </Card>
  </Col>
)

ListComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

ListComponent.defaultProps = {
  title: undefined,
  description: undefined
}

export default ListComponent
