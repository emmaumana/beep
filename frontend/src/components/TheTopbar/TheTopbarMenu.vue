<script setup lang="ts">
import { useAuthStore } from '@/apps/auth/store'
import { useUserStore } from '@/apps/users/store'
import NotificationIcon from '@/components/icons/NotificationIcon.vue'

const userStore = useUserStore()

const performLogout = () => useAuthStore().logout()
</script>

<template>
  <!-- menu -->
  <div class="topbar__menu flex gap-3">
    <div class="topbar__notifications cursor-pointer">
      <NotificationIcon />
    </div>
    <div @click="performLogout" class="topbar__navigation cursor-pointer">
      <figure class="avatar h-10 w-10">
        <img
          class="h-full w-full object-cover object-top flex-none rounded-full"
          :src="userStore.user?.avatar"
          alt="user-avatar"
        />
      </figure>
      <nav class="topbar__nav hidden">
        <ul class="nav">
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
