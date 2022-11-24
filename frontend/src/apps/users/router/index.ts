import type { RouteRecordRaw } from 'vue-router'

export const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'user-detail',
    meta: { requireAuth: true },
    component: () => import('../views/UserDetailView.vue'),
  },
]