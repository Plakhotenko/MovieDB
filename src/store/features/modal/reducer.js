import { SET_MODAL, HIDE_MODAL } from './types'

const initialState = {
  currentModal: undefined
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        currentModal: action.modal
      }
    case HIDE_MODAL:
      return {
        currentModal: undefined
      }
    default:
      return state
  }
}

export default modal
