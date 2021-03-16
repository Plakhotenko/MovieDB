import { browserHistory } from 'react-router'

export const setCurrentPageToUrl = (page = 1) => {
  browserHistory.push({
    pathname: '/dashboard',
    search: `?page=${page}`
  })
}

export const getCurrentPageFromUrl = () => {
  const { query: { page } } = browserHistory.getCurrentLocation()
  return page ? +page : 1
}
