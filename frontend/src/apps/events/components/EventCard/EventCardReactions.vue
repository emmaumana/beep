<script setup lang="ts">
import { useUserStore } from '@/apps/users/store';
import { UserGroupIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline'
import { UserGroupIcon as UserGroupIconSolid, HandThumbUpIcon as HandThumbUpIconSolid } from '@heroicons/vue/24/solid'
import { computed } from 'vue';
import { useEventStore } from '../../store'

import type { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()

const currentUser = useUserStore().$state.user
const eventStore = useEventStore()

const hasUserLikedEvent = computed(() => !!props.event.likes.find(like => like === currentUser?.id))
const willUserAttend = computed(() => !!props.event.attendees.find(attendee => attendee === currentUser?.id))

const updateReactionsStatus = async (event:Event) => {
  const reactionToUpdate = (event.target as HTMLElement).closest('[data-reaction]')?.getAttribute('data-reaction')
  if( !reactionToUpdate) return

  const response = await eventStore.updateEvent(props.event.id, { [reactionToUpdate]: currentUser?.id})
}
</script>

<template>
  <div class="event__reactions flex gap-3">
    <div data-reaction="likes" class="event-card__likes flex font-semibold gap-1">
      <!-- off -->
      <HandThumbUpIcon
        v-if="!hasUserLikedEvent"
        @click="updateReactionsStatus"
        class="w-6 h-6 cursor-pointer hover:text-accent"
      />
      <!-- on -->
      <HandThumbUpIconSolid
        v-else
        @click="updateReactionsStatus"
        class="w-6 h-6 cursor-pointer text-secondary"
      />
      {{ props.event.likes.length }}
    </div>
    <div
      data-reaction="attendees"
      class="event-card__attendees flex font-semibold gap-1"
      title="Will go!"
    >
      <!-- off -->
      <UserGroupIcon
        v-if="!willUserAttend"
        @click="updateReactionsStatus"
        class="w-6 h-6 cursor-pointer hover:text-accent"
      />
      <!-- on -->
      <UserGroupIconSolid
        v-else
        @click="updateReactionsStatus"
        class="w-6 h-6 cursor-pointer text-accent"
      />
      {{ props.event.attendees.length }}
    </div>
  </div>
</template>
