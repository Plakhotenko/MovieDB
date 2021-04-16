import { combineReducers } from 'redux'
import session from './features/session'
import data from './features/data'
import trendingMovies from './features/dashboard'
import lists from './features/lists'
import listDetails from './features/listDetails'
import watchlist from './features/watchlist'
import favorites from './features/favorites'
import movieDetails from './features/movieDetails'
import modal from './features/modal'

const reducers = combineReducers({
  session, data, trendingMovies, lists, listDetails, watchlist, favorites, movieDetails, modal
})

export default reducers
