import { USER_LOGIN, FORM_SUBMIT } from './types'

export const loginUser = () => ({
  type: USER_LOGIN
})

export const formSubmit = ({ username, password }) => ({
  type: FORM_SUBMIT,
  payload: {
    data: {
      username,
      password
    }
  }
})
