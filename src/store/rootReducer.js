import { combineReducers } from 'redux'
import session from './features/session'
import trendingMovies from './features/dashboard'

const reducers = combineReducers({ session, trendingMovies })

export default reducers
