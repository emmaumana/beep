import type { RouteRecordRaw } from 'vue-router'

export const EventRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'event-app',
    meta: { requireAuth: true },
    component: () => import('../EventApp.vue'),
    children: [
      {
        path: '/home',
        name: 'event-listing',
        component: () => import('../views/EventListing.vue'),
      },
    ]
  },
]