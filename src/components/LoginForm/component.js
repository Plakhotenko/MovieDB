import React from 'react'
import {
  Button, Col, Form, Input, Layout, Row, Typography
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Form as FormikForm } from 'formik'

const LoginFormComponent = ({
  handleSubmit, handleChange, handleBlur, values, errors, touched
}) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <FormikForm onSubmit={handleSubmit}>
              <Typography.Title>The Movie DB</Typography.Title>
              <Form.Item
                validateStatus={touched.username && errors.username && 'error'}
                help={touched.username && errors.username}
              >
                <Input
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  prefix={(
                    <UserOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                validateStatus={touched.password && errors.password && 'error'}
                help={touched.password && errors.password}
              >
                <Input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  help={errors.password}
                  prefix={(
                    <LockOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </FormikForm>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

LoginFormComponent.propTypes = {
  errors: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  values: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }),
  touched: PropTypes.shape({
    username: PropTypes.bool,
    password: PropTypes.bool
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
}

LoginFormComponent.defaultProps = {
  errors: {},
  values: {},
  touched: {},
  handleChange: () => {},
  handleBlur: () => {},
  handleSubmit: () => {}
}

export default LoginFormComponent
