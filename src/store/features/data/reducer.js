import * as _ from 'lodash'
import { SET_DATA } from './types'

const initialState = {}

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return _.merge(state, action.data)
    default:
      return state
  }
}

export default data
