import React from 'react'
import {
  Button, Col, Form, Input, Layout, Row, Typography
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const LoginFormComponent = ({
  errors, values, handleChange, handleBlur
}) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            <Form>
              <Typography.Title>The Movie DB</Typography.Title>
              <Form.Item
                validateStatus={errors.username && 'error'}
                help={errors.username}
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
                validateStatus={errors.password && 'error'}
                help={errors.password}
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
            </Form>
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
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
}

LoginFormComponent.defaultProps = {
  errors: {},
  values: {},
  handleChange: () => {},
  handleBlur: () => {}
}

export default LoginFormComponent
