<script setup lang="ts">
import { useMarkdown, useEventEditor } from '@/apps/events/composables'
import type { SingleEvent } from '../../interfaces'

const props = defineProps<{
  event: SingleEvent
}>()

const { rawText, parsedOutput } = useMarkdown(props.event.description)
const { showEditor, changeEditorVisibilty, submitUpdate, EventCardEditor } = useEventEditor(props.event)
</script>

<template>
  <div
    v-if="!showEditor"
    @click="changeEditorVisibilty"
    class="event-card__description hover:bg-slate-50 cursor-pointer p-2 rounded"
    v-html="parsedOutput"
  ></div>
  <EventCardEditor
    v-else
    @saved="submitUpdate('description', rawText)"
    @canceled="changeEditorVisibilty"
    @keydown.meta.enter="submitUpdate('description', rawText)"
    v-model="rawText"
    :isBig="true"
  />
</template>

<style lang="scss">
.event-card__description {
  h1,
  h2,
  h3 {
    margin: 20px 0 10px;
  }

  ul {
    list-style: disc;
    padding: 20px 10px;
  }

  p {
    &:has(img) {
      margin: 16px 0 12px;
    }
    img {
      display: inline-block;
      height: 250px;
      width: 250px;
      padding: 12px 0 16px;
    }
  }

  hr {
    margin: 20px 0;
  }

  a {
    color: blue;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
