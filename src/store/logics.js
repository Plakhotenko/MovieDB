import sessionLogics from './features/session/logics'
import fetchTrendingMoviesLogic from './features/dashboard/logics'

export default [...sessionLogics, ...fetchTrendingMoviesLogic]
