import {
  GET_LIST_DETAILS_MOVIES, SET_LIST_DETAILS_MOVIES, SET_LIST_DETAILS_LOADING,
  REMOVE_LIST_DETAILS_MOVIE, REMOVE_LIST_DETAILS_MOVIE_SUCCESS, REMOVE_LIST_DETAILS
} from './types'

export const getListDetailsMovies = listId => ({
  type: GET_LIST_DETAILS_MOVIES,
  listId
})

export const setListDetailsLoading = isLoading => ({
  type: SET_LIST_DETAILS_LOADING,
  isLoading
})

export const setListDetailsMovies = ({ movieIds, name }) => ({
  type: SET_LIST_DETAILS_MOVIES,
  movieIds,
  name
})

export const removeListDetailsMovie = ({ listId, movieId }) => ({
  type: REMOVE_LIST_DETAILS_MOVIE,
  listId,
  movieId
})

export const removeListDetailsMovieSuccess = id => ({
  type: REMOVE_LIST_DETAILS_MOVIE_SUCCESS,
  id
})

export const removeListDetails = id => ({
  type: REMOVE_LIST_DETAILS,
  id
})
