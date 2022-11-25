import { marked } from 'marked'
import { ref, watch } from 'vue'

export function useMarkdown(input: string) {
  const rawText = ref(input)
  const parsedOutput = ref(marked.parse(input))

  watch(rawText, newVal => {
    if (newVal) {
      parsedOutput.value = marked.parse(newVal)
      rawText.value = newVal
    }
  })

  return { rawText, parsedOutput }
}
