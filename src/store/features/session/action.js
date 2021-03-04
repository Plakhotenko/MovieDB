import { USER_LOGIN, FORM_SUBMIT } from './types'

export const loginUser = () => ({
  type: USER_LOGIN
})

export const formSubmit = ({ username, password }, form) => ({
  type: FORM_SUBMIT,
  data: {
    username,
    password
  },
  form
})
