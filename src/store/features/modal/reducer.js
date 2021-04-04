import { SET_MODAL } from './types'

const initialState = {
  currentModal: undefined
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        currentModal: action.modal
      }
    default:
      return state
  }
}

export default data
