import { GET_TRENDING_MOVIES, SET_TRENDING_MOVIES, FETCHING_TRENDING_MOVIES } from './types'

export const getTrendingMovies = (page = 1) => ({
  type: GET_TRENDING_MOVIES,
  page
})

export const fetchingTrendingMovies = () => ({
  type: FETCHING_TRENDING_MOVIES
})

export const setTrendingMovies = (trendingMoviesArray, currentPage, totalResults) => ({
  type: SET_TRENDING_MOVIES,
  trendingMoviesArray,
  currentPage,
  totalResults
})
