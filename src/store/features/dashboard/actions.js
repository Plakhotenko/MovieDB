import { GET_TRENDING_MOVIES, SET_TRENDING_MOVIES, SET_LOADING } from './types'

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
