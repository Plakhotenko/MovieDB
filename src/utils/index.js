import { browserHistory } from 'react-router'

export const setParamsToUrl = ({ page, query = '' }) => {
  browserHistory.push({
    pathname: browserHistory.getCurrentLocation().pathname,
    search: `?page=${page}&query=${query}`
  })
}

export const getParamsFromUrl = () => {
  const { query: { page, query } } = browserHistory.getCurrentLocation()
  return {
    page: page ? Number(page) : 1,
    query
  }
}
