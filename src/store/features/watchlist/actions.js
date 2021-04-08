import {
  GET_WATCHLIST_MOVIES, SET_WATCHLIST_MOVIES, SET_WATCHLIST_LOADING, REMOVE_WATCHLIST_MOVIE,
  REMOVE_WATCHLIST_MOVIE_SUCCESS
} from './types'

export const getWatchlistMovies = (page = 1) => ({
  type: GET_WATCHLIST_MOVIES,
  page
})

export const setWatchlistLoading = isLoading => ({
  type: SET_WATCHLIST_LOADING,
  isLoading
})

export const setWatchlistMovies = ({ movieIds, total }) => ({
  type: SET_WATCHLIST_MOVIES,
  movieIds,
  total
})

export const removeWatchlistMovie = id => ({
  type: REMOVE_WATCHLIST_MOVIE,
  id
})

export const removeWatchlistMovieSuccess = id => ({
  type: REMOVE_WATCHLIST_MOVIE_SUCCESS,
  id
})
