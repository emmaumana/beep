<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from './apps/users/store'

import TheTopbar from '@/components/TheTopbar/index.vue'

const userStore = useUserStore()

const isUserLogedIn = computed(() => !!userStore.user)

const mainAppClasses = computed(() => {
  return isUserLogedIn.value ? 'grid sm:grid-cols-12' : ''
})

const viewClasses = computed(() => {
  return isUserLogedIn.value ? 'sm:col-span-6' : ''
})
</script>

<template>
  <main class="main-app relative min-h-full bg-slate-100">
    <TheTopbar />
    <div
      class="content pt-10 px-6 max-w-screen-xl items-start mx-auto relative"
      :class="mainAppClasses"
    >
      <aside
        v-if="isUserLogedIn"
        class="sidebar sidebar-left bg-white sm:col-span-3 sticky top-20 rounded-lg px-4 py-5"
      >
        <h2>Sidebar Left</h2>
      </aside>
      <RouterView :class="viewClasses" />
      <aside
        v-if="isUserLogedIn"
        class="sidebar sidebar-right bg-white sm:col-span-3 sticky top-20 rounded-lg px-4 py-5"
      >
        <h2>Sidebar Right</h2>
      </aside>
    </div>
  </main>
</template>

<style lang="sass" scoped></style>
