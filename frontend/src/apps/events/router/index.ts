import type { RouteRecordRaw } from 'vue-router'

export const EventRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'event-listing',
    meta: { requireAuth: true },
    component: () => import('../views/EventListing.vue'),
  },
  {
    path: '/',
    name: 'event-detail',
    meta: { requireAuth: true },
    component: () => import('../views/EventDetail.vue'),
  },
]