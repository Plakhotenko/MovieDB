import { createSelector } from 'reselect'

const getMovieDetailsIdSelector = (_, props) => props.match.params.movieId
const getDataMoviesSelector = state => state.data.movies

export const movieDetailsSelector = createSelector(
  getMovieDetailsIdSelector,
  getDataMoviesSelector,
  (id, movies) => (movies ? movies[id] : undefined)
)

const getDataPersonsSelector = state => state.data.persons

const getCastIdsSelector = createSelector(
  movieDetailsSelector,
  movie => (movie ? movie.cast : undefined)
)

export const castSelector = createSelector(
  getCastIdsSelector,
  getDataPersonsSelector,
  (ids, persons) => (persons ? ids.map(item => persons[item]) : undefined)
)

const getCrewIdsSelector = createSelector(
  movieDetailsSelector,
  movie => (movie ? movie.crew : undefined)
)

export const crewSelector = createSelector(
  getCrewIdsSelector,
  getDataPersonsSelector,
  (ids, persons) => (persons ? ids.map(item => persons[item]) : undefined)
)
