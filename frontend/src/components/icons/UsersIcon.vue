<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { UsersIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="icon p-2 rounded-full overflow-hidden">
    <UsersIcon v-bind="$attrs" class="text-white h-5 w-5" />
  </div>
</template>

<style scoped lang="scss">
.icon {
  background: rgb(109, 142, 254);
  background: linear-gradient(0deg, rgba(109, 142, 254, 1) 50%, rgba(193, 246, 241, 1) 100%);
}
</style>
