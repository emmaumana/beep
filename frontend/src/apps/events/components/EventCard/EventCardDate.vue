<script setup lang="ts">
import { ref } from 'vue'
import { useEventStore } from '../../store'

import type { SingleEvent } from '../../interfaces'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
  event: SingleEvent
}>()

const startingDate = new Date(props.event.date_start)
const endingDate = new Date(props.event.date_end)
const dateRange = ref([startingDate, endingDate])

const performUpdate = async (modelData:Date[]) => {
  const updatedData = {
    'date_start': modelData[0].toISOString(),
    'date_end': modelData[1].toISOString(),
  }
  console.log(updatedData)

  await useEventStore().updateEvent(props.event.id, updatedData)
}
</script>
<template>
  <div class="event-card__date relative p-2 flex gap-1 hover:bg-slate-50 cursor-pointer rounded">
    <VueDatePicker
      v-model="dateRange"
      class="w-full"
      range
      :clearable="false"
      @update:modelValue="performUpdate"
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
