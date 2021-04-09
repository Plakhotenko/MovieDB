import sessionLogics from './features/session/logics'
import trendingMoviesLogics from './features/dashboard/logics'
import listsLogics from './features/lists/logics'
import watchlistMoviesLogics from './features/watchlist/logics'
import favoriteMoviesLogics from './features/favorites/logics'

export default [
  ...sessionLogics,
  ...trendingMoviesLogics,
  ...listsLogics,
  ...watchlistMoviesLogics,
  ...favoriteMoviesLogics
]
