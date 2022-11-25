<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

import type { SingleEventDates } from '../interfaces'

const props = defineProps<{
  dateRange: string[]
}>()

const emit = defineEmits(['datePicked'])

const startingDate = new Date(props.dateRange[0])
const endingDate = new Date(props.dateRange[1])
const dateRange = ref([startingDate, endingDate])

const emitDatePicked = (modelData: Date[]) => {
  if( !modelData[0] || !modelData[1] ) return
  const updatedDates: SingleEventDates = {
    date_start: modelData[0].toISOString(),
    date_end: modelData[1].toISOString()
  }
  emit('datePicked', updatedDates)
}
</script>

<template>
  <div
    class="event-card__date-picker relative p-2 flex gap-1 hover:bg-slate-50 cursor-pointer rounded"
  >
    <VueDatePicker
      v-model="dateRange"
      class="w-full"
      range
      placeholder="Select a date"
      :clearable="false"
      @update:modelValue="emitDatePicked"
    >
      <template #input-icon>
        <CalendarDaysIcon class="w-6 h-6 text-accent" />
      </template>
    </VueDatePicker>
  </div>
</template>

<style scoped>
.dp__theme_light {
  --dp-border-color: '';
  --dp-border-color-hover: '';
  --dp-background-color: transparent;
}
</style>
