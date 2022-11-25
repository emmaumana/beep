<script setup lang="ts">
import { useEventStore } from '../../store'
import { TrashIcon } from '@heroicons/vue/24/outline'

import type { SingleEvent } from '../../interfaces'
import EventCardCoverPlaceholder from './EventCardCoverPlaceholder.vue'

const props = defineProps<{
  event: SingleEvent
}>()

const performUpdate = async(coverImage: File | string) => {
  const response = await useEventStore().updateEvent(props.event.id, { 'cover' : coverImage })
  console.log(response)
}
</script>

<template>
  <div class="event-card__cover mb-2">
    <figure v-if="props.event.cover" class="h-60 rounded-md relative overflow-hidden">
      <img class="h-full w-full object-cover" :src="props.event.cover" alt="event cover" />
      <TrashIcon
        class="absolute top-4 right-4 w-6 h-6 cursor-pointer text-slate-300 hover:text-red-500"
        @click="performUpdate('')"
      />
    </figure>
    <EventCardCoverPlaceholder v-else @file-uploaded="performUpdate" />
  </div>
</template>
