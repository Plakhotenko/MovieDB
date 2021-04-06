import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import { listsSchema } from 'Schemas'
import httpClient from 'Api/client'
import { setData } from '../data/actions'
import {
  setListsLoading, setLists, removeListSuccess, createListSuccess
} from './actions'
import { GET_LISTS, REMOVE_LIST, CREATE_LIST } from './types'
import { ENDPOINTS } from './endpoints'

const listsLogic = createLogic({
  type: GET_LISTS,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(setListsLoading(true))
    const sessionId = Cookies.get('session_id')
    const accountId = Cookies.get('account_id')

    const {
      data: {
        page: currentPage,
        results,
        total_results: total
      }
    } = await httpClient.get(ENDPOINTS.getCreatedLists(accountId), {
      params: {
        session_id: sessionId,
        page
      }
    })

    const { entities: { lists }, result: listIds } = normalize(results, listsSchema)

    setParamsToUrl({ page: currentPage })
    dispatch(setData({ lists }))
    dispatch(setLists({ listIds, total }))
    dispatch(setListsLoading(false))

    done()
  }
})

const removeListLogic = createLogic({
  type: REMOVE_LIST,
  latest: true,
  async process({ action: { id } }, dispatch, done) {
    const sessionId = Cookies.get('session_id')
    try {
      await httpClient.delete(ENDPOINTS.deleteList(id), {
        params: {
          session_id: sessionId
        }
      })
      dispatch(removeListSuccess(id))
    } catch (error) {
      if (error.status === 500) {
        dispatch(removeListSuccess(id))
      }
    }

    done()
  }
})

const createListLogic = createLogic({
  type: CREATE_LIST,
  latest: true,
  async process({ action: { name, description } }, dispatch, done) {
    const sessionId = Cookies.get('session_id')
    const { data: { list_id: listId } } = await httpClient.post(ENDPOINTS.createList,
      {
        name,
        description
      },
      {
        params: {
          session_id: sessionId
        }
      })
    const newList = {
      [listId]: {
        id: listId,
        name,
        description
      }
    }
    dispatch(setData({ lists: newList }))
    dispatch(createListSuccess(listId))
    done()
  }
})

export default [listsLogic, removeListLogic, createListLogic]
