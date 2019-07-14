import axios from 'axios'

const api = axios.create({
  baseURL: process.env.APP_API_URL,
})

api.interceptors.response.use(
  function onFulfilled(response) {
    return response.data
  },
  function onRejected(error) {
    return Promise.reject(error)
  },
)

export const ApiService = {
  get: api.get,
  delete: api.delete,
  post: api.post,
  put: api.put,
  patch: api.patch,
}
Object.freeze(ApiService)
