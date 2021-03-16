import merge from 'lodash/merge'
import { SET_DATA } from './types'

const initialState = {}

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return merge({}, state, action.data)
    default:
      return state
  }
}

export default data
