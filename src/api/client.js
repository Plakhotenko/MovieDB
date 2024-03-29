import axios from 'axios'
import Cookies from 'js-cookie'
import { API_KEY } from 'Constants'

const baseURL = 'https://api.themoviedb.org/3/'

const client = axios.create({
  baseURL,
  timeout: 10000,
  params: {
    api_key: API_KEY
  }
})

client.interceptors.request.use((config) => {
  const newConfig = config
  const token = Cookies.get('auth_token')
  const sessionId = Cookies.get('session_id')
  if (token) {
    newConfig.headers = { Authorization: `Bearer ${token}` }
  }
  if (sessionId) {
    newConfig.params.session_id = sessionId
  }

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
