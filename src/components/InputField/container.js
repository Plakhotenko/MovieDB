import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputFieldComponent from './component'

class InputField extends Component {
  get validateStatus() {
    const { field: { name }, form: { touched, errors } } = this.props
    return touched[name] && errors[name] && 'error'
  }

  get help() {
    const { field: { name }, form: { touched, errors } } = this.props
    return touched[name] && errors[name]
  }

  render() {
    const {
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
    } = this.props

    return (
      <InputFieldComponent
        name={name}
        touched={touched}
        errors={errors}
        value={values[name]}
        handleChange={handleChange}
        handleBlur={handleBlur}
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        validateStatus={this.validateStatus}
        help={this.help}
      />
    )
  }
}

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
  placeholder: undefined,
  type: 'text',
  prefix: undefined
}

export default InputField
