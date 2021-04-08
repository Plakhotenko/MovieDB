import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import { moviesListSchema } from 'Schemas'
import httpClient from 'Api/client'
import { setTrendingMovies, setLoading } from './actions'
import { setData } from '../data/actions'
import { API_ROUTES } from './apiRoutes'
import { GET_TRENDING_MOVIES, SEARCH_MOVIES } from './types'

const trendingMoviesLogic = createLogic({
  type: GET_TRENDING_MOVIES,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(setLoading(true))
    const {
      data: {
        page: currentPage,
        results,
        total_results: totalResults
      }
    } = await httpClient.get(API_ROUTES.trending, {
      params: {
        page
      }
    })

    const { entities: { movies }, result: movieIds } = normalize(results, moviesListSchema)
    setParamsToUrl({ page: currentPage })
    dispatch(setData({ movies }))
    dispatch(setTrendingMovies({ movieIds, total: totalResults }))
    dispatch(setLoading(false))
    done()
  }
})

const searchMoviesLogic = createLogic({
  type: SEARCH_MOVIES,
  latest: true,
  async process({ action: { page, query } }, dispatch, done) {
    dispatch(setLoading(true))

    const {
      data: {
        page: currentPage,
        results,
        total_results: totalResults
      }
    } = await httpClient.get(API_ROUTES.search, {
      params: {
        page,
        query,
        include_adult: true
      }
    })

    const { entities: { movies }, result: movieIds } = normalize(results, moviesListSchema)
    setParamsToUrl({ page: currentPage, query })
    dispatch(setData({ movies }))
    dispatch(setTrendingMovies({ movieIds, total: totalResults }))
    dispatch(setLoading(false))
    done()
  }
})

export default [trendingMoviesLogic, searchMoviesLogic]
