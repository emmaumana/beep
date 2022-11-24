import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'


import { useAuthStore } from './apps/auth/store'
import { useUserStore } from './apps/users/store'
import { getFromLocalStorage } from './utils'

import type { UserDetail } from './apps/users/interfaces'
import type { AuthState } from './apps/auth/interfaces'
import { setApiTokenHeader } from './services/api'

const pinia = createPinia()

const app = createApp({
  pinia,
  created() {
      const authStore = useAuthStore()
      const userStore = useUserStore()
      
      const user: UserDetail = getFromLocalStorage('user')
      const token: AuthState = getFromLocalStorage('userToken')
      if(!user) return
      // Initializing session
      userStore.$state.user = user
      authStore.$state = token
      setApiTokenHeader(token.accessToken)
  },
  render: () => h(App)
})

app.use(pinia)
app.use(router)
app.mount('#app')
