import { browserHistory } from 'react-router'

export const setCurrentPageToUrl = (page) => {
  browserHistory.push({
    pathname: browserHistory.getCurrentLocation().pathname,
    search: `?page=${page}`
  })
}

export const getCurrentPageFromUrl = () => {
  const { query: { page } } = browserHistory.getCurrentLocation()
  return page ? Number(page) : 1
}
