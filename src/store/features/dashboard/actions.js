import { FETCH_TRENDING_MOVIES, TRENDING_MOVIES } from './types'

export const fetchTrendingMovies = (page = 1) => ({
  type: FETCH_TRENDING_MOVIES,
  page
})

export const trendingMovies = (trendingMoviesArray, totalResults) => ({
  type: TRENDING_MOVIES,
  trendingMoviesArray,
  totalResults
})
