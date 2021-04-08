import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import httpClient from 'Api/client'
import { loginUserSuccess, logoutUserSuccess, setUserData } from './action'
import { API_ROUTES } from './apiRoutes'
import { LOGIN_USER, LOGOUT_USER, GET_USER_DATA } from './types'

const authLogic = createLogic({
  type: LOGIN_USER,
  latest: true,
  async process({
    action: {
      data: { username, password },
      form: { setErrors }
    }
  },
  dispatch, done) {
    try {
      const { data: { request_token: requestToken } } = await httpClient.get(API_ROUTES.newToken)
      const { data: { request_token: validatedToken } } = await httpClient.post(
        API_ROUTES.validateWithLogin, {
          username,
          password,
          request_token: requestToken
        }
      )
      const { data: { session_id: sessionId } } = await httpClient.post(
        API_ROUTES.newSession,
        { request_token: validatedToken }
      )
      Cookies.set('session_id', sessionId)
      dispatch(loginUserSuccess(username))
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
  type: LOGOUT_USER,
  latest: true,
  async process(_, dispatch, done) {
    await httpClient.delete(API_ROUTES.session, { data: { session_id: Cookies.get('session_id') } })

    dispatch(logoutUserSuccess())
    Cookies.remove('session_id')
    Cookies.remove('account_id')
    done()
  }
})

const getUserDataLogic = createLogic({
  type: GET_USER_DATA,
  latest: true,
  async process(_, dispatch, done) {
    const { data: { username, id: accountId } } = await httpClient.get(API_ROUTES.account)
    Cookies.set('account_id', accountId)
    dispatch(setUserData({ username }))
    done()
  }
})

export default [authLogic, logOutLogic, getUserDataLogic]
