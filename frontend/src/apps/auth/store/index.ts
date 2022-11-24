import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import { beepApi } from '@/services'
import { useUserStore } from '@/apps/users/store'
import { getUserIdFromToken, removeFromLocalStorage, saveToLocalStorage } from '@/utils'

import type { AuthState } from '../interfaces/'
import type { UserLogin } from '@/apps/users/interfaces/'


export const useAuthStore = defineStore('authorization', {
  state: (): AuthState => ({
    accessToken: '',
    refreshToken: ''
  }),

  actions: {
    async login(userData: UserLogin) {
      const loginResponse = await beepApi.Authorization.login({
        email: userData.email,
        password: userData.password
      })
      if (axios.isAxiosError(loginResponse)) return loginResponse.response

      this.accessToken = loginResponse.data.access
      this.refreshToken = loginResponse.data.refresh

      saveToLocalStorage('userToken', this.$state)

      const user_id = getUserIdFromToken(this.accessToken).user_id
      const userApiCall = await this.userStore.fetchSingleUser(user_id)

      if (axios.isAxiosError(userApiCall)) return userApiCall.response
      router.push({ name: 'event-listing' })
    },

    async logout() {
      removeFromLocalStorage('user')
      removeFromLocalStorage('userToken')
      location.reload()
    }
  },

  getters: {
    userStore: () => {
      const userStore = useUserStore()
      return userStore
    }
  }
})
