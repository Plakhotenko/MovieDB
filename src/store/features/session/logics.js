import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import httpClient from '../../../api/client'
import { loginUser } from './action'
import { ENDPOINTS } from './endpoints'
import { FORM_SUBMIT } from './types'

const sessionLogics = createLogic({
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
      dispatch(loginUser())
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

export default [sessionLogics]
