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
          class="flex text-lg text-primary items-center p-3 border-b mb-2 border-b-slate-200 hover:bg-gray-100/50 rounded gap-4 cursor-pointer"
        >
          <SquaresPlusIcon class="w-7 h-7 text-violet-400" />
          <a class="pointer-events-none" @click.prevent="">Add Event</a>
        </li>
        <li
          class="flex text-lg text-primary items-center p-3 hover:bg-gray-100/50 rounded gap-4 cursor-pointer"
        >
          <RectangleStackIcon class="w-7 h-7 text-violet-400" />
          <a @click.prevent="">Listing</a>
        </li>
        <li
          class="flex text-lg text-primary items-center p-3 hover:bg-gray-100/50 rounded gap-4 cursor-pointer"
        >
          <HandThumbUpIcon class="w-7 h-7 text-violet-400" />
          <a @click.prevent="">Liked Events</a>
        </li>
        <li
          class="flex text-lg text-primary items-center p-3 hover:bg-gray-100/50 rounded gap-4 cursor-pointer"
        >
          <CalendarDaysIcon class="w-7 h-7 text-violet-400" />
          <a @click.prevent="">My Events</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped></style>
