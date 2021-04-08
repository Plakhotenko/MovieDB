import {
  GET_FAVORITE_MOVIES, SET_FAVORITE_MOVIES, SET_FAVORITES_LOADING, REMOVE_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE_SUCCESS
} from './types'

export const getFavoriteMovies = (page = 1) => ({
  type: GET_FAVORITE_MOVIES,
  page
})

export const setFavoritesLoading = isLoading => ({
  type: SET_FAVORITES_LOADING,
  isLoading
})

export const setFavoriteMovies = ({ movieIds, total }) => ({
  type: SET_FAVORITE_MOVIES,
  movieIds,
  total
})

export const removeFavoriteMovie = id => ({
  type: REMOVE_FAVORITE_MOVIE,
  id
})

export const removeFavoriteMovieSuccess = id => ({
  type: REMOVE_FAVORITE_MOVIE_SUCCESS,
  id
})
