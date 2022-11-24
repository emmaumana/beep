import axios, { AxiosError } from 'axios'
import { api } from '@/services/api'
import { UserEndpoints } from './endpoints'

import type { User, UserDetail } from '../interfaces'


export const UserApiModule = {
  fechUser: async (id:number) => {
    try {
      const apiCall = await api.get<UserDetail>(UserEndpoints.fechUser(id))
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },

  fechUsers: async () => {
    try {
      const apiCall = await api.get<User[]>(UserEndpoints.fechUsers())
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  }
}
