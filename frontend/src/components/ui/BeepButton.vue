<script setup lang="ts">
import { computed } from 'vue'
import BeepLoaderSpinner from './BeepLoaderSpinner.vue'

const props = defineProps({
  primary: { type: Boolean, default: false },
  secondary: { type: Boolean, default: false },
  accent: { type: Boolean, default: false },
  outlined: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false }
})

const buttonStyle = computed(() => {
  if (props.primary) {
    if (props.outlined)
      return 'border-primary text-primary hover:bg-primary bg-white hover:text-white'
    return 'border-primary hover:text-primary bg-primary hover:bg-white text-white'
  }
  if (props.secondary) {
    if (props.outlined)
      return 'border-secondary text-secondary hover:bg-secondary bg-white hover:text-white'
    return 'border-secondary hover:text-secondary bg-secondary hover:bg-white text-white'
  }
  if (props.accent) {
    if (props.outlined) return 'border-accent text-accent hover:bg-accent bg-white hover:text-white'
    return 'border-accent border hover:text-accent bg-accent hover:bg-white text-white'
  }
})
</script>

<template>
  <button
    class="
		flex
		items-center
		justify-center
		p-3
		border
		disabled:pointer-events-none
		rounded"
    :class="buttonStyle"
    :disabled="props.isLoading"
  >
    <BeepLoaderSpinner v-if="props.isLoading" />
    <slot v-else />
  </button>
</template>

<style scoped></style>
