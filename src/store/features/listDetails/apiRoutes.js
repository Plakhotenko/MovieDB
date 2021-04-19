export const API_ROUTES = {
  listDetails: listId => `list/${listId}`,
  removeMovie: listId => `list/${listId}/remove_item`,
  deleteList: listId => `list/${listId}`
}
