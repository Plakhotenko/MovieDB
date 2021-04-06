export const ENDPOINTS = {
  account: 'account',
  getCreatedLists: accountId => `account/${accountId}/lists`,
  createList: 'list',
  deleteList: listId => `list/${listId}`
}
