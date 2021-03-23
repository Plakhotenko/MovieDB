import { getParamsFromUrl } from 'Utils'
import { SET_TRENDING_MOVIES, SET_LOADING, SET_SEARCH_QUERY } from './types'

const { page: currentPage, query: searchQuery } = getParamsFromUrl()

const initialState = {
  movieIds: [],
  currentPage,
  totalResults: 0,
  isLoading: true,
  isSearchLoading: false,
  searchQuery
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
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    default:
      return state
  }
}

export default trendingMovies
