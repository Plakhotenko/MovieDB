import {
  SET_LISTS, SET_LISTS_LOADING, REMOVE_LIST_SUCCESS, CREATE_LIST_SUCCESS
} from './types'

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
    case REMOVE_LIST_SUCCESS:
      return {
        ...state,
        listIds: state.listIds.filter(id => id !== action.id),
        totalResults: state.totalResults - 1
      }
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        listIds: [action.id, ...state.listIds],
        totalResults: state.totalResults + 1
      }
    default:
      return state
  }
}

export default lists
