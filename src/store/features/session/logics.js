import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import httpClient from '../../../api/client'
import { loginUser } from './action'
import { ENDPOINTS } from './endpoints'
import { FORM_SUBMIT } from './types'

const authLogic = createLogic({
  type: FORM_SUBMIT,
  latest: true,
  async process({ action: { payload: { data: { username, password } } } }, dispatch, done) {
    console.log(username, password)
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
      console.error(error)
    }
    done()
  }
})

export default [authLogic]
