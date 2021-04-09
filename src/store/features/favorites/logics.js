import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import { moviesListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { setFavoriteMovies, setFavoritesLoading, removeFavoriteMovieSuccess } from './actions'
import { setData } from '../data/actions'
import { API_ROUTES } from './apiRoutes'
import { GET_FAVORITE_MOVIES, REMOVE_FAVORITE_MOVIE } from './types'

const favoriteMoviesLogic = createLogic({
  type: GET_FAVORITE_MOVIES,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(setFavoritesLoading(true))
    const accountId = Cookies.get('account_id')

    const {
      data: {
        page: currentPage,
        results,
        total_results: totalResults
      }
    } = await httpClient.get(API_ROUTES.favoriteMovies(accountId), {
      params: {
        page
      }
    })

    const { entities: { movies }, result: movieIds } = normalize(results, moviesListSchema)
    setParamsToUrl({ page: currentPage })
    dispatch(setData({ movies }))
    dispatch(setFavoriteMovies({ movieIds, total: totalResults }))
    dispatch(setFavoritesLoading(false))
    done()
  }
})

const removeFavoriteMovieLogic = createLogic({
  type: REMOVE_FAVORITE_MOVIE,
  latest: true,
  async process({ action: { id } }, dispatch, done) {
    const accountId = Cookies.get('account_id')
    await httpClient.post(API_ROUTES.favorites(accountId), {
      media_type: 'movie',
      media_id: id,
      favorite: false
    })
    dispatch(removeFavoriteMovieSuccess(id))
    done()
  }
})

export default [favoriteMoviesLogic, removeFavoriteMovieLogic]
