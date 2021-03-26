import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from 'Store/features/session/action'
import LoginFormComponent from './component'

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(4)
})

const LoginForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    validationSchema={validationSchema}
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
  onSubmit: loginUser
}

export default connect(null, mapDispatchToProps)(LoginForm)
