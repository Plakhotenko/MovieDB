import { createLogic } from 'redux-logic'
import httpClient from '../../../api/client'
import { setTrendingMovies, fetchingTrendingMovies } from './actions'
import { ENDPOINTS } from './endpoints'
import { GET_TRENDING_MOVIES } from './types'

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
    dispatch(setTrendingMovies(results, currentPage, totalResults))
    done()
  }
})

export default [trendingMoviesLogic]
