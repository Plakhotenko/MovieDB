import Cookies from 'js-cookie'
import { createLogic } from 'redux-logic'
import { normalize, schema } from 'normalizr'
import { setParamsToUrl } from 'Utils'
import httpClient from 'Api/client'
import { setData } from '../data/actions'
import { setListsLoading, setLists, getLists } from './actions'
import { GET_LISTS, REMOVE_LIST } from './types'
import { ENDPOINTS } from './endpoints'

const listsItemSchema = new schema.Entity('lists')
const listsSchema = new schema.Array(listsItemSchema)

const listsLogic = createLogic({
  type: GET_LISTS,
  latest: true,
  async process({ action: { page } }, dispatch, done) {
    dispatch(setListsLoading(true))
    const sessionId = Cookies.get('session_id')

    const { data: { id: accountId } } = await httpClient.get(ENDPOINTS.account,
      {
        params: {
          session_id: sessionId
        }
      })

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
      dispatch(getLists())
    } catch (error) {
      if (error.status === 500) {
        dispatch(getLists())
      }
    }

    done()
  }
})

export default [listsLogic, removeListLogic]
