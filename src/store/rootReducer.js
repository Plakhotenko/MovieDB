import { combineReducers } from 'redux'
import session from './features/session'
import data from './features/data'
import trendingMovies from './features/dashboard'
import lists from './features/lists'

const reducers = combineReducers({
  session, data, trendingMovies, lists
})

export default reducers
