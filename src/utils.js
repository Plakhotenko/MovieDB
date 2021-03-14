export const setCurrentPageToUrl = (page = 1) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set('page', page)
  // eslint-disable-next-line
  history.replaceState(null, null, `${url.pathname}?${params}`)
}

export const getCurrentPageFromUrl = () => {
  const url = new URL(window.location.href)
  const currentPage = url.searchParams.get('page')
  url.searchParams.set('current', '1')
  return currentPage ? +currentPage : 1
}
