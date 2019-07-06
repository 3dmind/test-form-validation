import { UserApiService } from '../../services'

export function saveUserAction (data) {
  return UserApiService.saveUser(data)
}
