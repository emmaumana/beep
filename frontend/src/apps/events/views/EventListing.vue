<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useEventStore } from '../store'
import EventCard from '../components/EventCard/index.vue'

import type { SingleEvent }  from '../interfaces'


const eventStore = useEventStore()
const events = ref<SingleEvent[]>([])

onMounted( async ()=> {
  const eventsRequest = await eventStore.fetchEvents()
  if( !eventsRequest || typeof eventsRequest === 'number' ) return

  events.value = eventsRequest
})
</script>

<template>
  <div class="event_listing px-3 pb-16">
    <div class="event_listing-wrapper">
      <main class="event_listing-grid grid gap-y-5 mx-auto">
        <EventCard v-for="event in events" :event="event" />
      </main>
    </div>
  </div>
</template>
