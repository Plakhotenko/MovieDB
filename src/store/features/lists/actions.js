import {
  GET_LISTS, SET_LISTS_LOADING, SET_LISTS
} from './types'

export const setListsLoading = isLoading => ({
  type: SET_LISTS_LOADING,
  isLoading
})

export const getLists = (page = 1) => ({
  type: GET_LISTS,
  page
})

export const setLists = ({ listIds, total }) => ({
  type: SET_LISTS,
  listIds,
  total
})
