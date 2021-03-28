import Cookies from 'js-cookie'
import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS, SET_USER_DATA } from './types'

const initialState = {
  userIsAuthorized: !!Cookies.get('session_id'),
  username: undefined,
  accountId: undefined
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        userIsAuthorized: true,
        username: action.username
      }
    case LOGOUT_USER_SUCCESS:
      return {
        userIsAuthorized: false,
        username: undefined,
        accountId: undefined
      }
    case SET_USER_DATA:
      return {
        ...state,
        username: action.username,
        accountId: action.accountId
      }
    default:
      return state
  }
}

export default session
