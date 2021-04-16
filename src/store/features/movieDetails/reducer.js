import { SET_MOVIE_DETAILS_LOADING, SET_MOVIE_DETAILS } from './types'

const initialState = {
  isLoading: true,
  id: undefined
}

const movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

export default movieDetails
