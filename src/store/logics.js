import sessionLogics from './features/session/logics'
import trendingMoviesLogics from './features/dashboard/logics'
import listsLogics from './features/lists/logics'

export default [...sessionLogics, ...trendingMoviesLogics, ...listsLogics]
