import axios from 'axios'
import Cookies from 'js-cookie'
import { API_KEY } from './api_key'

const baseURL = 'https://api.themoviedb.org/3/'

const client = axios.create({
  baseURL,
  timeout: 10000
})

client.interceptors.request.use((config) => {
  const newConfig = config

  const token = Cookies.get('auth_token')
  if (token) {
    newConfig.headers = { Authorization: `Bearer ${token}` }
  }

  return newConfig
})

client.interceptors.request.use((config) => {
  const newConfig = config
  newConfig.url = `${config.url}?api_key=${API_KEY}`
  return newConfig
})

client.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      const { message } = error.response.data
      const { status } = error.response

      const newError = new Error(message)
      newError.status = status

      return Promise.reject(newError)
    }

    return Promise.reject(error)
  }
)

export default client
