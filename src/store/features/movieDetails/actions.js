import {
  SET_MOVIE_DETAILS_LOADING, GET_MOVIE_DETAILS, SET_MOVIE_DETAILS
} from './types'

export const setMoviesDetailsLoading = isLoading => ({
  type: SET_MOVIE_DETAILS_LOADING,
  isLoading
})

export const getMoviesDetails = id => ({
  type: GET_MOVIE_DETAILS,
  id
})

export const setMoviesDetails = id => ({
  type: SET_MOVIE_DETAILS,
  id
})
