import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import LoginFormComponent from './component'

const loginFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(4)
})

const LoginForm = () => (
  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    validationSchema={loginFormSchema}
  >
    {
      ({
        handleSubmit, handleChange, handleBlur, values, errors, touched
      }) => (
        <LoginFormComponent
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
      )
    }
  </Formik>
)

export default LoginForm
