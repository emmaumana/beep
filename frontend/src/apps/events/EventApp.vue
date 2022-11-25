<script setup lang="ts">
import BeepContainer from '@/components/ui/BeepContainer.vue'
</script>

<template>
  <main class="events-app relative min-h-full bg-slate-100">
    <BeepContainer>
      <RouterView />
    </BeepContainer>
  </main>
</template>

<style scoped></style>
