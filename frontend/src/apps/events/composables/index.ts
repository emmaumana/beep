import { marked } from 'marked'

export function useMarkdown(input: string) {
  const output = marked.parse(input)
  return output
}
