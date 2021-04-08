import { createSelector } from 'reselect'

const watchlistMoviesIdsSelector = state => state.watchlist.movieIds
const dataMoviesSelector = state => state.data.movies

export const watchlistMoviesSelector = createSelector(
  watchlistMoviesIdsSelector,
  dataMoviesSelector,
  (ids, movies) => ids.map(id => movies[id])
)

export const isMoviesEmptySelector = createSelector(
  watchlistMoviesIdsSelector,
  movies => !movies.length
)
