<script setup lang="ts">
import { useUserStore } from '@/apps/users/store'
import TheTopbarMenu from './TheTopbarMenu.vue'

const userStore = useUserStore()
</script>

<template>
  <div v-if="userStore.user" class="topbar sticky top-0 bg-white shadow z-10">
    <div class="topbar__wrapper py-2 px-6 flex justify-between items-center">
      <!-- brand -->
      <div class="topbar__brand">
        <a href="/" class="topbar__link">
          <figure class="topbar__logo">
            <img class="h-4 w-auto flex-none" src="/soundtrack.svg" alt="user-avatar" />
          </figure>
        </a>
      </div>
      <!-- menu -->
      <TheTopbarMenu />
    </div>
  </div>
</template>

<style scoped></style>
