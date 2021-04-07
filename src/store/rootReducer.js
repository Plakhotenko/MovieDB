import { combineReducers } from 'redux'
import session from './features/session'
import data from './features/data'
import trendingMovies from './features/dashboard'
import lists from './features/lists'
import watchlist from './features/watchlist'
import modal from './features/modal'

const reducers = combineReducers({
  session, data, trendingMovies, lists, watchlist, modal
})

export default reducers
