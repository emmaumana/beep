import axios, { AxiosError } from 'axios'
import { beepApi } from '@/services'
import { defineStore } from 'pinia'

import type { UserDetail, User } from '../interfaces'
import { saveToLocalStorage, removeFromLocalStorage } from '@/utils'

interface UserState {
  user: UserDetail | null,
  users: User[]
}

export const useUserStore = defineStore('users', {
  state: (): UserState => ({
    user: null,
    users: []
  }),

  actions: {

    async fetchSingleUser(id:number): Promise<UserDetail | AxiosError> {
      const response = await beepApi.Users.fechUser(id)
      if( !response || axios.isAxiosError(response) ) return new AxiosError

      this.user = response
      saveToLocalStorage('user', this.user)
      return response
    },

    async fetchUsers(): Promise<User[] | AxiosError> {
      const response = await beepApi.Users.fechUsers()
      if( !response || axios.isAxiosError(response) ) return new AxiosError

      this.users = response
      return response
    },

    clearUser():void {
      this.$reset()
      removeFromLocalStorage('user')
    }
  },

  getters: {}
})
