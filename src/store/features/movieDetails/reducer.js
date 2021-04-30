import { SET_MOVIE_DETAILS_LOADING } from './types'

const initialState = {
  isLoading: true
}

const movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}

export default movieDetails
