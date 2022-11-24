import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: { requireVisitor: true },
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { requireVisitor: true },
    component: () => import('../views/RegisterView.vue'),
  },
]