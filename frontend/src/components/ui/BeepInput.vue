<script setup lang="ts">
interface InputFileEvent extends Event {
  target: HTMLInputElement
}

const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="field">
    <input
      autoComplete="true"
      class="p-3 border-slate-300 focus:border-accent focus:ring-0 rounded w-full text-sm"
      :value="modelValue"
      :type="props.type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
