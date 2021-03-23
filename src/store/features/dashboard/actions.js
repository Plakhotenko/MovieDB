import {
  GET_TRENDING_MOVIES, SET_TRENDING_MOVIES, SET_LOADING, SET_SEARCH_LOADING, SET_SEARCH_QUERY
} from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING_MOVIES,
  page
})

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
})

export const setTrendingMovies = ({ movieIds, page, total }) => ({
  type: SET_TRENDING_MOVIES,
  movieIds,
  page,
  total
})

export const setSearchLoading = (value, _, page = 1) => ({
  type: SET_SEARCH_LOADING,
  query: value,
  page
})

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  searchQuery
})
