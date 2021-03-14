import { combineReducers } from 'redux'
import session from './features/session'
import data from './features/data'
import trendingMovies from './features/dashboard'

const reducers = combineReducers({ session, data, trendingMovies })

export default reducers
