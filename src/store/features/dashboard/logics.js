import { createLogic } from 'redux-logic'
import { normalize, schema } from 'normalizr'
import { setCurrentPageToUrl } from 'Utils'
import httpClient from 'Api/client'
import { setTrendingMovies, fetchingTrendingMovies } from './actions'
import { setMovies } from '../data/actions'
import { ENDPOINTS } from './endpoints'
import { GET_TRENDING_MOVIES } from './types'

const moviesSchema = new schema.Entity('movies')
const moviesListSchema = new schema.Array(moviesSchema)

const trendingMoviesLogic = createLogic({
  type: GET_TRENDING_MOVIES,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(fetchingTrendingMovies())
    const { data: { page: currentPage, results, total_results: totalResults } } = await httpClient.get(`${ENDPOINTS.trending}`, {
      params: {
        page
      }
    })

    const { entities: { movies }, result: moviesIds } = normalize(results, moviesListSchema)
    dispatch(setMovies(movies))
    dispatch(setTrendingMovies(moviesIds, currentPage, totalResults))
    setCurrentPageToUrl(currentPage)
    done()
  }
})

export default [trendingMoviesLogic]
