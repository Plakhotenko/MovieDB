import { SET_TRENDING_MOVIES, FETCHING_TRENDING_MOVIES } from './types'

const initialState = {
  movies: [],
  currentPage: 1,
  totalResults: 0
}

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_MOVIES:
      return {
        movies: [
          ...action.trendingMoviesArray
        ],
        currentPage: action.currentPage,
        totalResults: action.totalResults
      }
    case FETCHING_TRENDING_MOVIES:
      return {
        movies: []
      }
    default:
      return state
  }
}

export default trendingMovies
