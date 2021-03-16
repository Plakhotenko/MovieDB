import { createLogic } from 'redux-logic'
import { normalize, schema } from 'normalizr'
import { setCurrentPageToUrl } from 'Utils'
import httpClient from 'Api/client'
import { setTrendingMovies, setLoading } from './actions'
import { setData } from '../data/actions'
import { ENDPOINTS } from './endpoints'
import { GET_TRENDING_MOVIES } from './types'

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
    dispatch(setData({ movies }))
    dispatch(setTrendingMovies({ movieIds, page: currentPage, total: totalResults }))
    dispatch(setLoading(false))
    setCurrentPageToUrl({ page: currentPage, pathname: '/dashboard' })
    done()
  }
})

export default [trendingMoviesLogic]
