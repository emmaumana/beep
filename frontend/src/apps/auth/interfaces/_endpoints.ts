import { AxiosError, AxiosResponse } from 'axios'

import type { AuthTokenObject } from './'
import type { User, UserRegisterData } from '@/apps/users/interfaces'

export interface AuthorizationEndpoints {
  login: () => string
  refresh: () => string
  register: () => string
}

// export interface AuthorizationApiMethods {
//   login: (userData: {
//     email: string
//     password: string
//   }) => Promise<AuthTokenObject | AxiosError<ServerError>>
//   refresh: (refreshToken: string) => Promise<AuthTokenObject | AxiosError<ServerError>>
//   register: (userRegisterData: UserRegisterData) => Promise<User | AxiosError<unknown, any>>
// }
