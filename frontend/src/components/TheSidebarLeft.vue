<script lang="ts" setup>
import { SingleEvent } from '@/apps/events/interfaces'
import { useEventStore } from '@/apps/events/store'
import {
  SquaresPlusIcon,
  RectangleStackIcon,
  HandThumbUpIcon,
  CalendarDaysIcon
} from '@heroicons/vue/24/outline'

const eventStore = useEventStore()
</script>

<template>
  <aside class="sidebar sidebar-left">
    <nav class="sidebar__nav">
      <ul class="sidebar__menu">
        <li
          @click="eventStore.toggleEventCreateForm()"
          class="flex text-lg items-center p-3 hover:bg-gray-100 rounded gap-4 cursor-pointer"
        >
          <SquaresPlusIcon class="w-8 h-8" />
          <a @click.prevent="">Add Event</a>
        </li>
        <li class="flex text-lg items-center p-3 hover:bg-gray-100 rounded gap-4 cursor-pointer">
          <RectangleStackIcon class="w-8 h-8" />
          <a @click.prevent="">Listing</a>
        </li>
        <li class="flex text-lg items-center p-3 hover:bg-gray-100 rounded gap-4 cursor-pointer">
          <HandThumbUpIcon class="w-8 h-8" />
          <a @click.prevent="">Liked Events</a>
        </li>
        <li class="flex text-lg items-center p-3 hover:bg-gray-100 rounded gap-4 cursor-pointer">
          <CalendarDaysIcon class="w-8 h-8" />
          <a @click.prevent="">My Events</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped></style>
