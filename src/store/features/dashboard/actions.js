import {
  GET_TRENDING_MOVIES, SET_TRENDING_MOVIES, SET_LOADING, SEARCH_MOVIES
} from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING_MOVIES,
  page
})

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
})

export const setTrendingMovies = ({ movieIds, total }) => ({
  type: SET_TRENDING_MOVIES,
  movieIds,
  total
})

export const searchMovies = ({ query, page = 1 }) => ({
  type: SEARCH_MOVIES,
  query,
  page
})
