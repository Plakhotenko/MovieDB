import {
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, GET_USER_DATA, SET_USER_DATA
} from './types'

export const loginUser = ({ username, password }, form) => ({
  type: LOGIN_USER,
  data: {
    username,
    password
  },
  form
})

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS
})

export const getUserData = () => ({
  type: GET_USER_DATA
})

export const setUserData = ({ username, accountId }) => ({
  type: SET_USER_DATA,
  username,
  accountId
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
})
