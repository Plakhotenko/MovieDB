import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import history from 'Utils/history'
import { moviesListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { setListDetailsMovies, setListDetailsLoading, removeListDetailsMovieSuccess } from './actions'
import { setData } from '../data/actions'
import { API_ROUTES } from './apiRoutes'
import { GET_LIST_DETAILS_MOVIES, REMOVE_LIST_DETAILS_MOVIE, REMOVE_LIST_DETAILS } from './types'

const listDetailsMoviesLogic = createLogic({
  type: GET_LIST_DETAILS_MOVIES,
  latest: true,
  async process({ action: { listId } }, dispatch, done) {
    dispatch(setListDetailsLoading(true))
    const {
      data: {
        items,
        name
      }
    } = await httpClient.get(API_ROUTES.listDetails(listId))

    const { entities: { movies }, result: movieIds } = normalize(items, moviesListSchema)
    dispatch(setData({ movies }))
    dispatch(setListDetailsMovies({ movieIds, name, listId }))
    dispatch(setListDetailsLoading(false))
    done()
  }
})

const removeListDetailsMovieLogic = createLogic({
  type: REMOVE_LIST_DETAILS_MOVIE,
  latest: true,
  async process({ action: { listId, movieId } }, dispatch, done) {
    await httpClient.post(API_ROUTES.removeMovie(listId), {
      media_id: movieId
    })
    dispatch(removeListDetailsMovieSuccess(movieId))
    done()
  }
})

const removeListDetailsLogic = createLogic({
  type: REMOVE_LIST_DETAILS,
  latest: true,
  async process({ action: { id } }, dispatch, done) {
    try {
      await httpClient.delete(API_ROUTES.deleteList(id))
      history.push('/lists')
    } catch (error) {
      if (error.status === 500) {
        history.push('/lists')
      }
    }
    done()
  }
})

export default [listDetailsMoviesLogic, removeListDetailsMovieLogic, removeListDetailsLogic]
