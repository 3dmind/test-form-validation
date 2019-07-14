import { ApiService } from './ApiService'

export const UserApiService = {
  saveUser(data) {
    return ApiService.post('/users', data)
  },
}
Object.freeze(UserApiService)
