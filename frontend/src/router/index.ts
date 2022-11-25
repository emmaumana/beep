import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { authRoutes } from '@/apps/auth/router'
import { EventRoutes } from '@/apps/events/router'
import { UserRoutes } from '@/apps/users/router'

import { useUserStore } from '@/apps/users/store'

const routes: RouteRecordRaw[] = [...authRoutes, ...UserRoutes, ...EventRoutes]
const router = createRouter({
  history: createWebHistory(import.meta.env.BEEP_BASE_URL),
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach(async to => {
  const userStore = useUserStore()
  // User is logged in? ⤵
  if (to.matched.some(url => url.meta.requireAuth) && !userStore.user) {
    return {
      name: 'login-view',
      query: { redirect: to.fullPath }
    }
  }
  if (!to.matched.length) {
    return {
      name: 'event-listing'
    }
  }
})

export default router
