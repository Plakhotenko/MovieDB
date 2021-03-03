import React from 'react'
import {
  Button, Col, Form, Layout, Row, Typography
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Form as FormikForm, Field } from 'formik'
import InputField from '../InputField'

const LoginFormComponent = ({
  handleSubmit,
  isSubmitting
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
              <Field
                name="username"
                placeholder="Username"
                autoComplete="username"
                component={InputField}
                type="text"
                prefix={(
                  <UserOutlined
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                )}
              />
              <Field
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                component={InputField}
                type="password"
                prefix={(
                  <LockOutlined
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                )}
              />
              <Form.Item>
                <Button
                  loading={isSubmitting}
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
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
}

LoginFormComponent.defaultProps = {
  isSubmitting: false
}

export default LoginFormComponent
