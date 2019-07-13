import { UserApiService } from '../../services/api'

export function saveUserAction (data) {
  return UserApiService.saveUser(data)
}
