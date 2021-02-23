import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

const InputFieldComponent = ({
  name,
  value,
  handleChange,
  handleBlur,
  help,
  type,
  prefix,
  placeholder,
  validateStatus
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={help}
  >
    <Input
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      type={type}
      prefix={prefix}
      placeholder={placeholder}
    />
  </Form.Item>
)

InputFieldComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  help: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.element,
  placeholder: PropTypes.string,
  validateStatus: PropTypes.string
}

InputFieldComponent.defaultProps = {
  placeholder: '',
  type: 'text',
  prefix: null,
  validateStatus: '',
  help: null,
  value: ''
}

export default InputFieldComponent
