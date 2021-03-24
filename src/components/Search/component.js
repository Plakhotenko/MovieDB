import React from 'react'
import {
  Row, Col, Form, Input
} from 'antd'
import PropTypes from 'prop-types'

const SearchComponent = ({
  validateStatus,
  form: {
    errors: { query: errorText },
    handleSubmit,
    handleChange,
    handleBlur
  },
  field: { name, value }
}) => (
  <Row
    justify="center"
    gutter={{
      xs: 8, sm: 16, md: 24, lg: 22
    }}
  >
    <Col
      className="gutter-row"
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 14 }}
      lg={{ span: 12 }}
      xl={{ span: 10 }}
    >
      <Form.Item
        validateStatus={validateStatus}
        help={errorText}
      >
        <Input.Search
          onSearch={handleSubmit}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          allowClear
          placeholder="Enter movie name"
          size="large"
          enterButton="Search"
          className="top-margin"
        />
      </Form.Item>
    </Col>
  </Row>
)

SearchComponent.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.shape({
      query: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }).isRequired,
  validateStatus: PropTypes.string
}

SearchComponent.defaultProps = {
  validateStatus: undefined
}

export default SearchComponent
