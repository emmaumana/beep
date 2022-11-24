import { AxiosError } from 'axios'
import { api, setApiTokenHeader } from '@/services/api'
import { AuthEndpoints } from './endpoints'

import type { User, UserRegisterData } from '@/apps/users/interfaces'
import type { AuthTokenObject } from '../interfaces'

export const AuthorizationApiModule = {

  login: async (userData:{ email: string, password:string }) => {
    try {
      const apiCall = await api.post<AuthTokenObject>(AuthEndpoints.login(), userData)
      setApiTokenHeader(apiCall.data.access)
      return apiCall
    } catch (error) {
      return error as AxiosError
    }
  },

  refresh: async (refreshToken:string) => {
    try {
      const { data } = await api.post<AuthTokenObject>(AuthEndpoints.refresh(), { refreshToken })
      setApiTokenHeader(data.access)
      return data
    } catch (error) {
      return error as AxiosError
    }
  },

  register: async (userData:UserRegisterData) => {
    try {
      const { data } = await api.post<User>(AuthEndpoints.register(), userData)
      return data
    } catch (error) {
      return error as AxiosError
    }
  }
}
