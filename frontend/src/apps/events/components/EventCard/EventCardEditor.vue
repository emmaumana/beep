<script setup lang="ts">
import BeepButton from '@/components/ui/BeepButton.vue'

defineProps<{
  modelValue: string
}>()

defineEmits(['saved', 'canceled', 'update:modelValue'])
</script>
<template>
  <div class="event-card__editor">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="event-card__editor-text p-3 border-slate-300 focus:border-accent focus:ring-0 rounded w-full h-48"
    >
    </textarea>
    <div class="event-card__editor-actions felx gap-2">
      <BeepButton
        @click="$emit('saved')"
        class="hover:bg-accent hover:text-white w-20 font-semibold"
      >
        Save
      </BeepButton>

      <BeepButton
        @click="$emit('canceled')"
        class="hover:bg-accent hover:text-white w-20 font-semibold"
      >
        Cancel
      </BeepButton>
    </div>
  </div>
</template>
