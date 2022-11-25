<script setup lang="ts">
import { useUserStore } from '@/apps/users/store'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { SingleEvent } from '../../interfaces'
import { useEventStore } from '../../store'

const props = defineProps<{
  event: SingleEvent
}>()

const currentUser = useUserStore().$state.user
const eventStore = useEventStore()

const isUserEvent = props.event.created_by === currentUser?.id
const peformDelete = () => {
  eventStore.deleteEvent(props.event.id)
}
</script>

<template>
  <div class="event-card__actions flex gap-3 w-full justify-end">
    <span v-if="isUserEvent" title="Delete">
      <TrashIcon @click="peformDelete" class="w-6 h-6 cursor-pointer hover:text-red-500" />
    </span>
  </div>
</template>
