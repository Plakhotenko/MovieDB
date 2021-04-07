import {
  SET_WATCHLIST_MOVIES, SET_WATCHLIST_LOADING, REMOVE_WATCHLIST_MOVIE_SUCCESS
} from './types'

const initialState = {
  movieIds: [],
  totalResults: 0,
  isLoading: true
}

const watchlist = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST_MOVIES:
      return {
        ...state,
        movieIds: action.movieIds,
        totalResults: action.total
      }
    case SET_WATCHLIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case REMOVE_WATCHLIST_MOVIE_SUCCESS:
      return {
        ...state,
        movieIds: state.movieIds.filter(id => id !== action.id),
        totalResults: state.totalResults - 1
      }
    default:
      return state
  }
}

export default watchlist
