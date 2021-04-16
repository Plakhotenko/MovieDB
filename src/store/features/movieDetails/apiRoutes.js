export const API_ROUTES = {
  movie: id => `movie/${id}`,
  movieImages: id => `movie/${id}/images`,
  movieCredits: id => `movie/${id}/credits`,
  movieState: id => `movie/${id}/account_states`,
  setFavorite: accountId => `account/${accountId}/favorite`,
  setWatchlist: accountId => `account/${accountId}/watchlist`
}
