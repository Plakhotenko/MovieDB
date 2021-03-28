import { createSelector } from 'reselect'

const listIdsSelector = state => state.lists.listIds
const dataListsSelector = state => state.data.lists

export const listsSelector = createSelector(
  listIdsSelector,
  dataListsSelector,
  (ids, lists) => ids.map(id => lists[id])
)

export const isListsEmptySelector = createSelector(
  listIdsSelector,
  lists => !lists.length
)
