<script setup lang="ts">
import TheTopbar from '@/components/TheTopbar/index.vue'
import TheSideBarLeft from '@/components/TheSidebarLeft.vue'
import TheSideBarRight from '@/components/TheSidebarRigh.vue'
</script>

<template>
  <div class="beep-container">
    <TheTopbar />
    <div
      class="beep-container__wrapper pt-10 px-6 max-w-screen-xl grid sm:grid-cols-12 items-start mx-auto relative"
    >
      <TheSideBarLeft class="bg-white sm:col-span-3 sticky top-20 rounded-lg px-4 py-5" />
      <slot />
      <TheSideBarRight class="bg-white sm:col-span-3 sticky top-20 rounded-lg px-4 py-5" />
    </div>
  </div>
</template>

<style scoped></style>
