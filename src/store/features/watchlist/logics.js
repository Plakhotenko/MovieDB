import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import { moviesListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { setWatchlistMovies, setWatchlistLoading, removeWatchlistMovieSuccess } from './actions'
import { setData } from '../data/actions'
import { API_ROUTES } from './apiRoutes'
import { GET_WATCHLIST_MOVIES, REMOVE_WATCHLIST_MOVIE } from './types'

const watchlistMoviesLogic = createLogic({
  type: GET_WATCHLIST_MOVIES,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(setWatchlistLoading(true))
    const sessionId = Cookies.get('session_id')
    const accountId = Cookies.get('account_id')

    const {
      data: {
        page: currentPage,
        results,
        total_results: totalResults
      }
    } = await httpClient.get(API_ROUTES.watchlistMovies(accountId), {
      params: {
        page,
        session_id: sessionId
      }
    })

    const { entities: { movies }, result: movieIds } = normalize(results, moviesListSchema)
    setParamsToUrl({ page: currentPage })
    dispatch(setData({ movies }))
    dispatch(setWatchlistMovies({ movieIds, total: totalResults }))
    dispatch(setWatchlistLoading(false))
    done()
  }
})

const removeWatchlistMovieLogic = createLogic({
  type: REMOVE_WATCHLIST_MOVIE,
  latest: true,
  async process({ action: { id } }, dispatch, done) {
    const sessionId = Cookies.get('session_id')
    const accountId = Cookies.get('account_id')
    await httpClient.post(API_ROUTES.watchlist(accountId), {
      media_type: 'movie',
      media_id: id,
      watchlist: false
    },
    {
      params: {
        session_id: sessionId
      }
    })
    dispatch(removeWatchlistMovieSuccess(id))
    done()
  }
})

export default [watchlistMoviesLogic, removeWatchlistMovieLogic]
