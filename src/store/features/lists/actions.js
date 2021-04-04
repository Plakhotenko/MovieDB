import {
  GET_LISTS, SET_LISTS_LOADING, SET_LISTS, REMOVE_LIST, REMOVE_LIST_SUCCESS, CREATE_LIST
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

export const removeList = id => ({
  type: REMOVE_LIST,
  id
})

export const removeListSuccess = id => ({
  type: REMOVE_LIST_SUCCESS,
  id
})

export const createList = ({ name, description }) => ({
  type: CREATE_LIST,
  name,
  description
})
