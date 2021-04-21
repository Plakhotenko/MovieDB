import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import merge from 'lodash/merge'
import { moviesSchema, personsListSchema } from 'Schemas'
import httpClient from 'Api/client'
import {
  GET_MOVIE_DETAILS, SET_FAVORITE, SET_WATCHLIST, ADD_MOVIE_TO_LIST, ADD_MOVIE_TO_NEW_LIST
} from './types'
import { createListSuccess } from '../lists/actions'
import { setMoviesDetailsLoading, addMovieToList } from './actions'
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

const addMovieToListLogic = createLogic({
  type: ADD_MOVIE_TO_LIST,
  latest: true,
  async process({ action: { movieId, listId } }, dispatch, done) {
    await httpClient.post(API_ROUTES.addItem(listId), {
      media_id: movieId
    })
    done()
  }
})

const addMovieToNewListLogic = createLogic({
  type: ADD_MOVIE_TO_NEW_LIST,
  latest: true,
  async process({ action: { name, description, movieId } }, dispatch, done) {
    const { data: { list_id: listId } } = await httpClient.post(API_ROUTES.createList,
      {
        name,
        description
      })
    const newList = {
      [listId]: {
        id: listId,
        name,
        description
      }
    }
    dispatch(setData({ lists: newList }))
    dispatch(createListSuccess(listId))
    dispatch(addMovieToList({ listId, movieId }))
    done()
  }
})

export default [
  getMovieDetailsLogic,
  setFavoriteLogic,
  setWatchlistLogic,
  addMovieToListLogic,
  addMovieToNewListLogic
]
