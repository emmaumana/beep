interface ImportMetaEnv {
  readonly BEEP_APP_TITLE: string
  readonly BEEP_BASE_URL: string
  readonly BEEP_API_BASE_URL: string
  readonly BEEP_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
