<script setup lang="ts">
import { ref } from 'vue'
import { useEventStore } from '../../store'
import EventCardDatePicker from '../EventCardDatePicker.vue'

import type { SingleEvent, SingleEventDates } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()

const dateRange = [props.event.date_start, props.event.date_end]

const performUpdate = async (modelData:SingleEventDates) => {
  await useEventStore().updateEvent(props.event.id, modelData)
}
</script>
<template>
  <EventCardDatePicker :date-range="dateRange" @date-picked="performUpdate" />
</template>
