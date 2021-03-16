import { createSelector } from 'reselect'

const trendingMoviesIdsSelector = state => state.trendingMovies.movieIds
const dataMoviesSelector = state => state.data.movies

export const trendingMoviesSelector = createSelector(
  trendingMoviesIdsSelector,
  dataMoviesSelector,
  (ids, movies) => ids.map(id => movies[id])
)
