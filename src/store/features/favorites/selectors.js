import { createSelector } from 'reselect'

const favoriteMoviesIdsSelector = state => state.favorites.movieIds
const dataMoviesSelector = state => state.data.movies

export const favoriteMoviesSelector = createSelector(
  favoriteMoviesIdsSelector,
  dataMoviesSelector,
  (ids, movies) => ids.map(id => movies[id])
)

export const isMoviesEmptySelector = createSelector(
  favoriteMoviesIdsSelector,
  movies => !movies.length
)
