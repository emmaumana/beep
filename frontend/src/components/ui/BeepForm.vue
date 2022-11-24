<script setup lang="ts">
const emit = defineEmits<{
  (event: 'submit'): void
}>()

const submittedForm = (): void => emit('submit')
</script>

<template>
  <div class="beep-form w-full">
    <form @submit.prevent="submittedForm" class="beep-form__form space-y-5">
      <div class="beep-form__body space-y-5">
        <slot name="body"></slot>
      </div>
      <div class="beep-form__errors">
        <slot name="errors" />
      </div>
      <div class="beep-form__actions flex w-full justify-between gap-6">
        <slot name="actions" />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
