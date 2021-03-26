import React from 'react'
import {
  Row, Col, Form, Input
} from 'antd'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  query: yup.string().required()
})

const SearchComponent = ({ onSearch, searchQuery }) => (
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
      <Formik
        initialValues={{
          query: searchQuery
        }}
        validationSchema={validationSchema}
        onSubmit={onSearch}
      >
        {
          ({
            values: { query: queryValue },
            errors: { query: errorText },
            handleSubmit,
            handleChange,
            handleBlur
          }) => (
            <Form.Item
              validateStatus={errorText && 'error'}
              help={errorText}
            >
              <Input.Search
                onSearch={handleSubmit}
                name="query"
                value={queryValue}
                onChange={handleChange}
                onBlur={handleBlur}
                allowClear
                placeholder="Enter movie name"
                size="large"
                enterButton="Search"
                className="top-margin"
              />
            </Form.Item>
          )
        }
      </Formik>
    </Col>
  </Row>
)

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
}

export default SearchComponent
