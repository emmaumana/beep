<script setup lang="ts">
import { formatDate } from '@/utils'
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline'

import type { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()
</script>

<template>
  <div class="event-card__where flex gap-5">
    <div class="event-card__location flex gap-1">
      <MapPinIcon class="w-6 h-6 text-accent" />
      {{ props.event.location }}
    </div>
    <div class="event-card__start flex gap-1">
      <CalendarDaysIcon class="w-6 h-6 text-accent" />
      {{ formatDate(props.event.date_start) }}
    </div>
  </div>
</template>
