export const ENDPOINTS = {
  account: 'account',
  getCreatedLists(accountId) {
    return `account/${accountId}/lists`
  },
  createList: 'list',
  deleteList(listId) {
    return `list/${listId}`
  }
}
