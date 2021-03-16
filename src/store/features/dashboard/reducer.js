import { getCurrentPageFromUrl } from 'Utils'
import { SET_TRENDING_MOVIES, SET_LOADING } from './types'

const initialState = {
  movies: [],
  currentPage: getCurrentPageFromUrl(),
  totalResults: 0,
  isLoading: true
}

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_MOVIES:
      return {
        ...state,
        movies: action.movies,
        currentPage: action.page,
        totalResults: action.total
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.loading
      }
    default:
      return state
  }
}

export default trendingMovies
