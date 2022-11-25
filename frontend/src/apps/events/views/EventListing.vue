<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useEventStore } from '../store'
import { storeToRefs } from 'pinia'

import EventCard from '../components/EventCard/index.vue'
import BeepForm from '@/components/ui/BeepForm.vue'
import BeepInput from '@/components/ui/BeepInput.vue'
import BeepButton from '@/components/ui/BeepButton.vue'
import EventCardCoverPlaceholder from '../components/EventCard/EventCardCoverPlaceholder.vue'
import EventCardDatePickerVue from '../components/EventCardDatePicker.vue'
import EventCardCover from '../components/EventCard/EventCardCover.vue'

import type { SingleEventCreate, SingleEventDates } from '../interfaces'

const eventStore = useEventStore()
const events = storeToRefs(useEventStore()).events

let newEventData:SingleEventCreate = {
  title: '',
  description: '',
  location: '',
  date_start: '',
  date_end: '',
}

interface FormError {
  text: string,
  field: string
}

const imageUploadedUrl = ref('')
const formErrors = ref<FormError[]>([])
const dateRange = [newEventData.date_start, newEventData.date_end]

const setCover = (file:File) => {
  newEventData.cover = file
  createEmptyImageFile()
}

const setDates = (dates:SingleEventDates) => {
  Object.assign(newEventData, dates)
}

const createEmptyImageFile = () => {
  if( !newEventData.cover ) return
  let imageUrl = URL.createObjectURL(newEventData.cover)
  imageUploadedUrl.value = imageUrl
}

const resetForm = () => {
  newEventData = {
    title: '',
    description: '',
    location: '',
    date_start: '',
    date_end: '',
  }
  imageUploadedUrl.value = ''
  formErrors.value = []
  eventStore.toggleEventCreateForm()
}

 const perfomCreate = () => {
  let errors = []
  for (const [key, value] of Object.entries(newEventData)) {
    if( !newEventData[key as keyof SingleEventCreate] ) {
      errors.push({ 'text': `The following field is required:  ${ key }`, 'field': key })
    }
  }
  formErrors.value = errors
  if(formErrors.value.length) return
  eventStore.addEvent(newEventData)
  resetForm()
 }

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
              <figure v-if="imageUploadedUrl" class="h-60 overflow-hidden rounded-md">
                <img :src="imageUploadedUrl" class="h-full w-full object-cover" alt="cover" />
              </figure>
              <EventCardCoverPlaceholder v-else @file-uploaded="setCover" />
              <EventCardDatePickerVue :date-range="dateRange" @date-picked="setDates" />
              <BeepInput placeholder="Title" v-model="newEventData.title" />
              <BeepInput placeholder="Location" v-model="newEventData.location" />
              <BeepInput placeholder="Description" v-model="newEventData.description" />
            </template>
            <template #actions>
              <BeepButton primary @click="perfomCreate" class="w-full">Create</BeepButton>
              <BeepButton @click="resetForm" primary outlined class="w-full">Cancel</BeepButton>
            </template>
            <template #errors>
              <ul class="list-disc pl-2">
                <li v-for="error in formErrors" :key="error.field">
                  {{ error.text }}
                </li>
              </ul>
            </template>
          </BeepForm>
        </div>
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </main>
    </div>
  </div>
</template>
