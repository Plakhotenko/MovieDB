export const API_ROUTES = {
  account: 'account',
  getCreatedLists: accountId => `account/${accountId}/lists`,
  createList: 'list',
  deleteList: listId => `list/${listId}`
}
