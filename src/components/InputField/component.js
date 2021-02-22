import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

const InputField = ({
  field: {
    name
  },
  form: {
    touched,
    errors,
    values,
    handleChange,
    handleBlur
  },
  prefix,
  placeholder,
  type
}) => (
  <Form.Item
    validateStatus={touched[name] && errors[name] && 'error'}
    help={touched[name] && errors[name]}
  >
    <Input
      name={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      help={errors[name]}
      type={type}
      placeholder={placeholder}
      prefix={prefix}
    />
  </Form.Item>
)

InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({
      username: PropTypes.bool,
      password: PropTypes.bool
    }).isRequired,
    errors: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string
    }).isRequired,
    values: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.element
}

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  prefix: null
}

export default InputField
