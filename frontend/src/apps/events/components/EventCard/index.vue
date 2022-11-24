<script setup lang="ts">
import { computed, onMounted } from 'vue'

import BeepAvatar from '@/components/ui/BeepAvatar.vue'
import EventCardCover from './EventCardCover.vue'
import EventCardTitle from './EventCardTitle.vue'
import EventCardDescription from './EventCardDescription.vue'
import EventCardActions from './EventCardActions.vue'
import EventCardReactions from './EventCardReactions.vue'
import EventCardLocationTime from './EventCardLocationTime.vue'

import type { SingleEvent } from '../../interfaces'
import { useUserStore } from '@/apps/users/store'
import { AxiosError } from 'axios'

const props = defineProps<{
  event: SingleEvent
}>()
const userStore = useUserStore()

const eventOwner = computed(() => userStore.users.filter(user => user.id === props.event.created_by)[0])

onMounted( async()=> {
  const usersRequest = await userStore.fetchUsers()
  if(usersRequest instanceof AxiosError) return usersRequest.message
})
</script>

<template>
  <div
    class="event-card grid gap-y-4 bg-white shadow-sm hover:shadow-md px-4 py-5 transition-shadow rounded-lg font-secondary font-normal"
  >
    <!-- author -->
    <div v-if="eventOwner" class="event-card__author flex items-center font-semibold gap-3 mb-3">
      <span title="Author">
        <BeepAvatar :src="eventOwner.avatar" />
      </span>
      {{ eventOwner.first_name }} {{ eventOwner.last_name }}
    </div>
    <!-- event cover -->
    <EventCardCover :event="event" />
    <!-- event heading -->
    <div class="event-card__heading grid gap-y-4">
      <EventCardTitle :event="event" />
      <!-- card location & time -->
      <EventCardLocationTime :event="event" />
    </div>
    <!-- event body -->
    <div class="event-card__body">
      <EventCardDescription :event="event" />
    </div>
    <!-- event info -->
    <div class="event-card__info flex items-center justify-between gap-6">
      <EventCardReactions :event="event" />
      <!-- actions -->
      <EventCardActions :event="event" />
    </div>
  </div>
</template>
