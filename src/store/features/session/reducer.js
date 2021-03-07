import Cookies from 'js-cookie'
import { USER_LOGIN, USER_LOGGED_OUT, USER_DATA } from './types'

const initialState = {
  userIsAuthorized: !!Cookies.get('session_id'),
  username: undefined
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        userIsAuthorized: true,
        username: action.username
      }
    case USER_LOGGED_OUT:
      return {
        userIsAuthorized: false,
        username: undefined
      }
    case USER_DATA:
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default session
