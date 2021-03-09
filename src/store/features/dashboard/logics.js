import { createLogic } from 'redux-logic'
import httpClient from '../../../api/client'
import { trendingMovies } from './actions'
import { ENDPOINTS } from './endpoints'
import { FETCH_TRENDING_MOVIES } from './types'

const fetchTrendingMoviesLogic = createLogic({
  type: FETCH_TRENDING_MOVIES,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    const { data: { results, total_results: totalResults } } = await httpClient.get(`${ENDPOINTS.trending}`, {
      params: {
        page
      }
    })
    dispatch(trendingMovies(results, totalResults))
    done()
  }
})

export default [fetchTrendingMoviesLogic]
