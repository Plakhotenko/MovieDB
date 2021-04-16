import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import merge from 'lodash/merge'
import { moviesSchema, personsListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { GET_MOVIE_DETAILS } from './types'
import { setMoviesDetails, setMoviesDetailsLoading } from './actions'
import { setData } from '../data/actions'
import { API_ROUTES } from './apiRoutes'

const getMovieDetailsLogic = createLogic({
  type: GET_MOVIE_DETAILS,
  latest: true,
  async process({ action: { id } }, dispatch, done) {
    dispatch(setMoviesDetailsLoading(true))

    const { data } = await httpClient.get(API_ROUTES.movie(id))

    const {
      data: {
        backdrops
      }
    } = await httpClient.get(API_ROUTES.movieImages(id))

    const {
      data: {
        cast,
        crew
      }
    } = await httpClient.get(API_ROUTES.movieCredits(id))

    const {
      entities: { persons: castPersons }, result: castIds
    } = normalize(cast, personsListSchema)

    const {
      entities: { persons: crewPersons }, result: crewIds
    } = normalize(crew, personsListSchema)

    const { entities: { movies } } = normalize(data, moviesSchema)


    movies[id].backdrops = backdrops
    movies[id].cast = castIds
    movies[id].crew = crewIds

    const persons = merge({}, castPersons, crewPersons)

    dispatch(setMoviesDetails(id))
    dispatch(setData({ movies, persons }))
    dispatch(setMoviesDetailsLoading(false))
    done()
  }
})

export default [getMovieDetailsLogic]
