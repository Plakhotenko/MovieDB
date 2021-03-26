import { createLogic } from 'redux-logic'
import { normalize, schema } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import httpClient from 'Api/client'
import { setTrendingMovies, setLoading } from './actions'
import { setData } from '../data/actions'
import { ENDPOINTS } from './endpoints'
import { GET_TRENDING_MOVIES, SEARCH_MOVIES } from './types'

const moviesSchema = new schema.Entity('movies')
const moviesListSchema = new schema.Array(moviesSchema)

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
    } = await httpClient.get(ENDPOINTS.trending, {
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
    } = await httpClient.get(ENDPOINTS.search, {
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
