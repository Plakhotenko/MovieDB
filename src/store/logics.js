import sessionLogics from './features/session/logics'
import getTrendingMoviesLogic from './features/dashboard/logics'

export default [...sessionLogics, ...getTrendingMoviesLogic]
