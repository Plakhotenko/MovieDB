import { createSelector } from 'reselect'

const getDetailsId = state => state.movieDetails.id
const getDataMovies = state => state.data.movies

export const movieDetailsSelector = createSelector(
  getDetailsId,
  getDataMovies,
  (id, movies) => ((id && movies) ? movies[id] : undefined)
)

const getDataPersons = state => state.data.persons

const getCastIds = ({
  movieDetails: { id }, data: { movies }
}) => ((id && movies) ? movies[id].cast : undefined)

export const castSelector = createSelector(
  getCastIds,
  getDataPersons,
  (ids = [], persons = []) => ids.map(item => persons[item])
)

const getCrewIds = ({
  movieDetails: { id }, data: { movies }
}) => ((id && movies) ? movies[id].crew : undefined)

export const crewSelector = createSelector(
  getCrewIds,
  getDataPersons,
  (ids = [], persons = []) => ids.map(item => persons[item])
)
