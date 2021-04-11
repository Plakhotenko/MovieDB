import {
  SET_LIST_DETAILS_MOVIES, SET_LIST_DETAILS_LOADING, REMOVE_LIST_DETAILS_MOVIE_SUCCESS
} from './types'

const initialState = {
  movieIds: [],
  name: undefined,
  isLoading: true
}

const listDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_DETAILS_MOVIES:
      return {
        ...state,
        movieIds: action.movieIds,
        name: action.name
      }
    case SET_LIST_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case REMOVE_LIST_DETAILS_MOVIE_SUCCESS:
      return {
        ...state,
        movieIds: state.movieIds.filter(id => id !== action.id),
        totalResults: state.totalResults - 1
      }
    default:
      return state
  }
}

export default listDetails
