<script setup lang="ts">
import { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()
</script>

<template>
  <div v-if="props.event.cover" class="event-card__cover mb-2">
    <figure class="h-60 rounded-md overflow-hidden">
      <img class="h-full w-full object-cover" :src="props.event.cover" alt="event cover" />
    </figure>
  </div>
</template>
