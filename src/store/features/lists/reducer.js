import { SET_LISTS, SET_LISTS_LOADING } from './types'

const initialState = {
  listIds: [],
  totalResults: 0,
  isLoading: true
}

const lists = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
        listIds: action.listIds,
        totalResults: action.total
      }
    case SET_LISTS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}

export default lists
