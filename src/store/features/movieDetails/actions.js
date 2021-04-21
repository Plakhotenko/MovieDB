import {
  SET_MOVIE_DETAILS_LOADING, GET_MOVIE_DETAILS, SET_FAVORITE, SET_WATCHLIST,
  ADD_MOVIE_TO_LIST, ADD_MOVIE_TO_NEW_LIST
} from './types'

export const setMoviesDetailsLoading = isLoading => ({
  type: SET_MOVIE_DETAILS_LOADING,
  isLoading
})

export const getMoviesDetails = id => ({
  type: GET_MOVIE_DETAILS,
  id
})

export const setFavorite = ({ id, favorite }) => ({
  type: SET_FAVORITE,
  id,
  favorite
})

export const setWatchlist = ({ id, watchlist }) => ({
  type: SET_WATCHLIST,
  id,
  watchlist
})

export const addMovieToList = ({ listId, movieId }) => ({
  type: ADD_MOVIE_TO_LIST,
  listId,
  movieId
})

export const addMovieToNewList = ({ name, description, movieId }) => ({
  type: ADD_MOVIE_TO_NEW_LIST,
  name,
  description,
  movieId
})
