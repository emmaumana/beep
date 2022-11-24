//axios configuration
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.BEEP_API_BASE_URL,
  responseType: 'json',
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const setApiTokenHeader = (token: string): void => {
  instance.defaults.headers.common['Authorization'] = `Token ${token}`
}

const getApiTokenHeader = (): any => {
  return instance.defaults.headers.common['Authorization']
}

const clearApiTokenHeader = (): void => {
  instance.defaults.headers.common['Authorization'] = ''
}

// instance.interceptors.response.use(response => {
//   // Everything went well, pass only relevant data through
//   return response.data
// })

const api = instance

export { api, setApiTokenHeader, getApiTokenHeader, clearApiTokenHeader }
