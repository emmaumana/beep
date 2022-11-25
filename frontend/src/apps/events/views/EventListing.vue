<script setup lang="ts">
import { onMounted } from 'vue'
import { useEventStore } from '../store'
import EventCard from '../components/EventCard/index.vue'
import { storeToRefs } from 'pinia'
import BeepForm from '@/components/ui/BeepForm.vue'
import BeepInput from '@/components/ui/BeepInput.vue'
import EventCardCoverPlaceholder from '../components/EventCard/EventCardCoverPlaceholder.vue'
import BeepButton from '@/components/ui/BeepButton.vue'

const eventStore = useEventStore()
const events = storeToRefs(useEventStore()).events

onMounted(async () => {
  const eventsRequest = await eventStore.fetchEvents()
  if (!eventsRequest || typeof eventsRequest === 'number') return
})
</script>

<template>
  <div class="event_listing px-3 pb-16 sm:col-span-6">
    <div class="event_listing-wrapper">
      <main class="event_listing-grid grid gap-y-5 mx-auto relative">
        <div class="new-event" v-if="eventStore.isCreateFormOpen">
          <BeepForm
            class="event-card grid gap-y-4 bg-white shadow-sm hover:shadow-md px-4 py-5 transition-shadow rounded-lg font-secondary font-normal"
          >
            <template #body>
              <h3 class="text-primary">New Event</h3>
              <EventCardCoverPlaceholder />
              <BeepInput placeholder="Title" />
              <BeepInput placeholder="Location" />
              <BeepInput placeholder="Dates" />
              <BeepInput placeholder="Description" />
            </template>
            <template #actions>
              <BeepButton primary class="w-full">Create</BeepButton>
              <BeepButton
                @click="eventStore.toggleEventCreateForm()"
                primary
                outlined
                class="w-full"
                >Cancel</BeepButton
              >
            </template>
          </BeepForm>
        </div>
        <EventCard v-for="event in events" :event="event" />
      </main>
    </div>
  </div>
</template>
