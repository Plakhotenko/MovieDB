import { browserHistory } from 'react-router'

export const setCurrentPageToUrl = ({ pathname, page }) => {
  browserHistory.push({
    pathname,
    search: `?page=${page}`
  })
}

export const getCurrentPageFromUrl = () => {
  const { query: { page } } = browserHistory.getCurrentLocation()
  return page ? Number(page) : 1
}
