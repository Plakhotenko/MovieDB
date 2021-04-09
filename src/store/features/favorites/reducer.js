import {
  SET_FAVORITE_MOVIES, SET_FAVORITES_LOADING, REMOVE_FAVORITE_MOVIE_SUCCESS
} from './types'

const initialState = {
  movieIds: [],
  totalResults: 0,
  isLoading: true
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_MOVIES:
      return {
        ...state,
        movieIds: action.movieIds,
        totalResults: action.total
      }
    case SET_FAVORITES_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case REMOVE_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        movieIds: state.movieIds.filter(id => id !== action.id),
        totalResults: state.totalResults - 1
      }
    default:
      return state
  }
}

export default favorites
