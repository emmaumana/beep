import type { RouteRecordRaw } from 'vue-router'

export const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user-detail',
    name: 'user-detail',
    meta: { requireAuth: true },
    component: () => import('../views/UserDetailView.vue'),
  },
]