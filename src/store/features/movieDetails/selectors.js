import { createSelector } from 'reselect'

const movieIdSelector = (_, movieId) => movieId
const moviesSelector = state => state.data.movies

export const movieSelector = createSelector(
  movieIdSelector,
  moviesSelector,
  (id, movies) => (movies ? movies[id] : undefined)
)

const personsSelector = state => state.data.persons

const castIdsSelector = createSelector(
  movieSelector,
  movie => (movie ? movie.cast : undefined)
)

export const castSelector = createSelector(
  castIdsSelector,
  personsSelector,
  (ids, persons) => (persons ? ids.map(item => persons[item]) : undefined)
)

const crewIdsSelector = createSelector(
  movieSelector,
  movie => (movie ? movie.crew : undefined)
)

export const crewSelector = createSelector(
  crewIdsSelector,
  personsSelector,
  (ids, persons) => (persons ? ids.map(item => persons[item]) : undefined)
)
