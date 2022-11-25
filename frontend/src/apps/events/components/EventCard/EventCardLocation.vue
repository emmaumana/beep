<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { useEventEditor } from '../../composables'

import type { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()

const { showEditor, changeEditorVisibilty, submitUpdate, EventCardEditor } = useEventEditor(props.event)
</script>

<template>
  <div class="event-card__location">
    <div
      v-if="!showEditor"
      @click="changeEditorVisibilty"
      class="hover:bg-slate-50 cursor-pointer p-2 rounded flex gap-3"
    >
      <MapPinIcon class="w-6 h-6 text-accent" />
      <span>{{ props.event.location }}</span>
    </div>
    <EventCardEditor
      v-else
      v-model="event.location"
      @saved="submitUpdate('location', event.location)"
      @canceled="changeEditorVisibilty"
      @keydown.meta.enter="submitUpdate('location', event.location)"
    />
  </div>
</template>
