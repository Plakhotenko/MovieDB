import sessionLogics from './features/session/logics'
import trendingMoviesLogics from './features/dashboard/logics'
import listsLogics from './features/lists/logics'
import watchlistMoviesLogics from './features/watchlist/logics'
import favoriteMoviesLogics from './features/favorites/logics'
import listDetailsLogics from './features/listDetails/logics'
import movieDetailsLogic from './features/movieDetails/logics'

export default [
  ...sessionLogics,
  ...trendingMoviesLogics,
  ...listsLogics,
  ...watchlistMoviesLogics,
  ...favoriteMoviesLogics,
  ...listDetailsLogics,
  ...movieDetailsLogic
]
