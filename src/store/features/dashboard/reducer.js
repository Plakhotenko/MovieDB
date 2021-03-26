import { SET_TRENDING_MOVIES, SET_LOADING } from './types'

const initialState = {
  movieIds: [],
  totalResults: 0,
  isLoading: true
}

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_MOVIES:
      return {
        ...state,
        movieIds: action.movieIds,
        totalResults: action.total
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}

export default trendingMovies
