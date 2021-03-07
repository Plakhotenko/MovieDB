import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import httpClient from '../../../api/client'
import { loginUser, loggedOutUser, userData } from './action'
import { ENDPOINTS } from './endpoints'
import { FORM_SUBMIT, USER_LOGOUT, GET_USER_DATA } from './types'

const authLogic = createLogic({
  type: FORM_SUBMIT,
  latest: true,
  async process({
    action: {
      data: { username, password },
      form: { setErrors }
    }
  },
  dispatch, done) {
    try {
      const { data: { request_token: requestToken } } = await httpClient.get(ENDPOINTS.newToken)
      const { data: { request_token: validatedToken } } = await httpClient.post(
        ENDPOINTS.validateWithLogin, {
          username,
          password,
          request_token: requestToken
        }
      )
      const { data: { session_id: sessionId } } = await httpClient.post(
        ENDPOINTS.newSession,
        { request_token: validatedToken }
      )
      Cookies.set('session_id', sessionId)
      dispatch(loginUser(username))
    } catch (error) {
      if (error.status === 401) {
        setErrors({
          username: 'Invalid username and/or password',
          password: 'Invalid username and/or password'
        })
      }
    }
    done()
  }
})

const logOutLogic = createLogic({
  type: USER_LOGOUT,
  latest: true,
  // eslint-disable-next-line
  async process({ action }, dispatch, done) {
    await httpClient.delete(ENDPOINTS.session, { data: { session_id: Cookies.get('session_id') } })

    dispatch(loggedOutUser())
    Cookies.remove('session_id')
    done()
  }
})

const getUserDataLogic = createLogic({
  type: GET_USER_DATA,
  latest: true,
  // eslint-disable-next-line
  async process({ action }, dispatch, done) {
    const sessionId = Cookies.get('session_id')
    const { data: { username } } = await httpClient.get(`${ENDPOINTS.account}?session_id=${sessionId}`)
    dispatch(userData(username))
    done()
  }
})

export default [authLogic, logOutLogic, getUserDataLogic]
