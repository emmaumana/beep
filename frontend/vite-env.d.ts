/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly BEEP_BASE_URL: string
  readonly BEEP_APP_TITLE: string
  readonly BEEP_API_URL: string
}
