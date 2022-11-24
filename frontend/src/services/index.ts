import { AuthorizationApiModule as Authorization } from '@/apps/auth/services'
import { EventApiModule as Events } from '@/apps/events/services'
import { UserApiModule as Users } from '@/apps/users/services'

export const beepApi = {
  Authorization,
  Events,
  Users
}
