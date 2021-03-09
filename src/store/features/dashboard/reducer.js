import { TRENDING_MOVIES } from './types'

const initialState = {
  movies: [],
  totalResults: 0
}

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_MOVIES:
      return {
        movies: [
          ...action.trendingMoviesArray
        ],
        totalResults: action.totalResults
      }
    default:
      return state
  }
}

export default trendingMovies
