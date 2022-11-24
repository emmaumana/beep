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
  <div class="login-page h-full">
    <div
      class="login-form flex justify-end gap-5 shadow-md bg-white sm:overflow-hidden sm:rounded-lg relative top-16 mx-auto max-w-screen-lg h-4/5"
    >
      <!-- cover image -->
      <div class="form-image absolute top-0 h-full left-0 w-3/4">
        <img class="w-full h-full object-cover object-bottom" src="/covers/login-3.jpeg" alt="" />
      </div>
      <!-- form  -->
      <div
        class="form-wrapper z-10 bg-white flex justify-center items-center flex-col skew-x-3 w-2/4 p-16 space-y-10"
      >
        <!-- logo -->
        <figure class="form-logo flex flex-col items-center gap-4 -skew-x-3">
          <img class="h-16" src="/soundtrack.svg" />
          <p class="text-slate-600 text-center text-sm font-primary">
            Music events to the next level
          </p>
        </figure>
        <BeepForm class="-skew-x-3">
          <template #body>
            <BeepInput placeholder="email" type="email" v-model="userData.email" />
            <BeepInput placeholder="password" type="password" v-model="userData.password" />
          </template>
          <template #actions>
            <router-link class="w-2/4" :to="{ name: 'register' }">
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
