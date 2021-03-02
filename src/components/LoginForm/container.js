import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginFormComponent from './component'
import { formSubmit } from '../../store/features/session/action'

const loginFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(4)
})

const LoginForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    validationSchema={loginFormSchema}
    onSubmit={onSubmit}
  >
    {
      ({
        handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting
      }) => (
        <LoginFormComponent
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
        />
      )
    }
  </Formik>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  onSubmit: formSubmit
}

export default connect(null, mapDispatchToProps)(LoginForm)
