import { AuthorizationEndpoints } from '../interfaces'

export const AuthEndpoints: AuthorizationEndpoints = {
  login: () => `/auth/login/`,
  refresh: () => `/auth/refresh/`,
  register: () => `/auth/register/`
}
