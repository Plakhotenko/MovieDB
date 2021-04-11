import { createSelector } from 'reselect'

const listDetailsMoviesIdsSelector = state => state.listDetails.movieIds
const dataMoviesSelector = state => state.data.movies

export const listDetailsMoviesSelector = createSelector(
  listDetailsMoviesIdsSelector,
  dataMoviesSelector,
  (ids, movies) => ids.map(id => movies[id])
)

export const isMoviesEmptySelector = createSelector(
  listDetailsMoviesIdsSelector,
  movies => !movies.length
)
