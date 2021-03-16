import { GET_TRENDING_MOVIES, SET_TRENDING_MOVIES, SET_LOADING } from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING_MOVIES,
  page
})

export const setLoading = (loading = true) => ({
  type: SET_LOADING,
  loading
})

export const setTrendingMovies = ({ movies, page, total }) => ({
  type: SET_TRENDING_MOVIES,
  movies,
  page,
  total
})
