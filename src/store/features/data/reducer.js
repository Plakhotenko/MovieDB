import { SET_MOVIES } from './types'

const initialState = {
  movies: {}
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: {
          ...state.movies,
          ...action.movies
        }
      }
    default:
      return state
  }
}

export default data
