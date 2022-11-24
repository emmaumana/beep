<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <figure class="avatar h-10 w-10">
    <img
      class="h-full w-full object-cover object-top flex-none rounded-full"
      :src="src"
      alt="user-avatar"
    />
  </figure>
</template>
