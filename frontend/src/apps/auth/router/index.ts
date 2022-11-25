import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: { requireVisitor: true },
    component: () => import('../AuthApp.vue'),
    children: [
      {
        path: '/login',
        name: 'login-view',
        component: () => import('../views/LoginView.vue'),
      },
      {
        path: '/register',
        name: 'register-view',
        component: () => import('../views/RegisterView.vue'),
      },
    ]
  },
]