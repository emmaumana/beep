<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useAuthStore } from '../store'

import BeepButton from '@/components/ui/BeepButton.vue'
import BeepForm from '@/components/ui/BeepForm.vue'
import BeepInput from '@/components/ui/BeepInput.vue'

const authStore = useAuthStore()
const userData = reactive<{
  email: string
  password: string
}>({
  email: '',
  password: ''
})

const isLoading = ref(false)

const changeLoadingAttemptStatus = () => (isLoading.value = !isLoading.value)

const isLoginButtonDisabled = computed(() => userData.email === '' || userData.password === '')

const requestLogin = async () => {
  changeLoadingAttemptStatus()
  const apiCall = await authStore.login(userData)
  // If error reset status
  if (apiCall?.status === 401) {
    changeLoadingAttemptStatus()
    return
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-form flex flex-row gap-5 bg-white relative max-h-[100vh]">
      <!-- cover image -->
      <div class="login-form__image w-4/5 max-h-fit">
        <img
          class="w-full h-full max-w-full object-cover object-bottom"
          src="/covers/login-3.jpeg"
          alt="login"
        />
      </div>
      <!-- form  -->
      <div
        class="form-wrapper z-10 bg-white flex justify-center w-2/5 items-center flex-col skew-x-3 p-7 space-y-10"
      >
        <!-- logo -->
        <figure class="form-logo flex flex-col items-center gap-4 -skew-x-3">
          <img class="h-16" src="/beep-logo.svg" />
          <p class="text-slate-600 text-center text-sm font-primary">
            Your events to the next level
          </p>
        </figure>
        <BeepForm class="-skew-x-3">
          <template #body>
            <BeepInput placeholder="email" type="email" v-model="userData.email" />
            <BeepInput placeholder="password" type="password" v-model="userData.password" />
          </template>
          <template #actions>
            <router-link class="w-2/4" :to="{ name: 'register-view' }">
              <BeepButton class="w-full" secondary outlined>
                Sign Up
              </BeepButton>
            </router-link>
            <BeepButton
              @click="requestLogin"
              class="w-2/4"
              accent
              :disabled="isLoginButtonDisabled"
              :isLoading="isLoading"
              >Login</BeepButton
            >
          </template>
        </BeepForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
