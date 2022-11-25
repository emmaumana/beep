<script setup lang="ts">
import { useEventEditor } from '../../composables'
import { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()

const { showEditor, changeEditorVisibilty, submitUpdate, EventCardEditor } = useEventEditor(
  props.event
)
</script>

<template>
  <h3
    v-if="!showEditor"
    @click="changeEditorVisibilty"
    class="event-card__title text-3xl inline-block w-auto hover:bg-slate-50 cursor-pointer p-2 mb-3 rounded"
  >
    {{ event.title }}
  </h3>
  <EventCardEditor
    v-else
    v-model="event.title"
    @saved="submitUpdate('title', event.title)"
    @canceled="changeEditorVisibilty"
    @keydown.meta.enter="submitUpdate('title', event.title)"
  />
</template>
