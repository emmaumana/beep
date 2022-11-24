<script setup lang="ts">
import { computed, ref } from 'vue'
import { useEventStore } from '../../store'
import { useMarkdown } from '@/apps/events/composables'

import type  { SingleEvent } from '../../interfaces'
import EventCardEditor from './EventCardEditor.vue'

const props = defineProps<{
  event: SingleEvent
}>()

const showEditor = ref(false)
const eventStore = useEventStore()

const eventDescription = ref(props.event.description)

const eventParsedDescription = computed(() => useMarkdown(eventDescription.value))

const changeEditorVisibilty = () => {
  showEditor.value = !showEditor.value
}

const submitUpdate = async () => {
  const updateResponse = await eventStore.updateEvent(props.event.id, { 'description': eventDescription.value })

  if(!updateResponse) return
  changeEditorVisibilty()
}
</script>

<template>
  <div
    v-if="!showEditor"
    @click="changeEditorVisibilty"
    class="event-card__description hover:bg-slate-50 cursor-pointer p-2 rounded"
    v-html="eventParsedDescription"
    data-focus="true"
  ></div>
  <EventCardEditor
    v-else
    @saved="submitUpdate"
    @canceled="changeEditorVisibilty"
    @keydown.meta.enter="submitUpdate"
    v-model="eventDescription"
  />
</template>

<style lang="scss">
.event-card__description {
  h1,
  h2,
  h3 {
    margin: 20px 0 10px;
  }

  ul {
    list-style: disc;
    padding: 20px 10px;
  }

  a {
    color: blue;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
