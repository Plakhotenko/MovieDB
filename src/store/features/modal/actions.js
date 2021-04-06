import { SET_MODAL, HIDE_MODAL } from './types'

export const setModal = modal => ({
  type: SET_MODAL,
  modal
})

export const hideModal = () => ({
  type: HIDE_MODAL
})
