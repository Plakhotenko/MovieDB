import Cookies from 'js-cookie'
import { USER_LOGIN } from './types'

const initialState = {
  userIsAuthorized: !!Cookies.get('session_id')
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userIsAuthorized: true
      }
    default:
      return state
  }
}

export default session
