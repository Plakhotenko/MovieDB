import { getParamsFromUrl } from 'Utils'
import { SET_TRENDING_MOVIES, SET_LOADING } from './types'

const { page: currentPage } = getParamsFromUrl()

const initialState = {
  movieIds: [],
  currentPage,
  totalResults: 0,
  isLoading: true,
  isSearchLoading: false
}

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_MOVIES:
      return {
        ...state,
        movieIds: action.movieIds,
        currentPage: action.page,
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
