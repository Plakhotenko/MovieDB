import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import merge from 'lodash/merge'
import { moviesSchema, personsListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { GET_MOVIE_DETAILS, SET_FAVORITE, SET_WATCHLIST } from './types'
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
      data: {
        watchlist,
        favorite
      }
    } = await httpClient.get(API_ROUTES.movieState(id))

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
    movies[id].watchlist = watchlist
    movies[id].favorite = favorite

    const persons = merge({}, castPersons, crewPersons)

    dispatch(setMoviesDetails(id))
    dispatch(setData({ movies, persons }))
    dispatch(setMoviesDetailsLoading(false))
    done()
  }
})

const setFavoriteLogic = createLogic({
  type: SET_FAVORITE,
  latest: true,
  async process({ action: { id, favorite } }, dispatch, done) {
    const accountId = Cookies.get('account_id')
    await httpClient.post(API_ROUTES.setFavorite(accountId), {
      media_type: 'movie',
      media_id: id,
      favorite
    })
    dispatch(setData({ movies: { [id]: { favorite } } }))
    done()
  }
})

const setWatchlistLogic = createLogic({
  type: SET_WATCHLIST,
  latest: true,
  async process({ action: { id, watchlist } }, dispatch, done) {
    const accountId = Cookies.get('account_id')
    await httpClient.post(API_ROUTES.setWatchlist(accountId), {
      media_type: 'movie',
      media_id: id,
      watchlist
    })
    dispatch(setData({ movies: { [id]: { watchlist } } }))
    done()
  }
})

export default [getMovieDetailsLogic, setFavoriteLogic, setWatchlistLogic]
