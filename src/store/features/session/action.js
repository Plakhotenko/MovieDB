import {
  USER_LOGIN, FORM_SUBMIT, USER_LOGOUT, USER_LOGGED_OUT, GET_USER_DATA, USER_DATA
} from './types'

export const loginUser = () => ({
  type: USER_LOGIN
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})

export const loggedOutUser = () => ({
  type: USER_LOGGED_OUT
})

export const formSubmit = ({ username, password }, form) => ({
  type: FORM_SUBMIT,
  data: {
    username,
    password
  },
  form
})

export const getUserData = () => ({
  type: GET_USER_DATA
})

export const userData = username => ({
  type: USER_DATA,
  username
})
