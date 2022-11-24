<script setup lang="ts">
import { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()
</script>

<template>
  <h3 class="event-card__title text-3xl">{{ props.event.title }}</h3>
</template>
