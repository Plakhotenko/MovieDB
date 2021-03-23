import React from 'react'
import { Row, Col, Input } from 'antd'
import PropTypes from 'prop-types'

const SearchComponent = ({ onSearch, isSearchLoading }) => (
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
      <Input.Search
        onSearch={onSearch}
        loading={isSearchLoading}
        allowClear
        placeholder="Enter movie name"
        size="large"
        enterButton="Search"
        className="top-margin"
      />
    </Col>
  </Row>
)

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isSearchLoading: PropTypes.bool
}

SearchComponent.defaultProps = {
  isSearchLoading: false
}

export default SearchComponent
