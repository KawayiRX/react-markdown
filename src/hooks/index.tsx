import { useEffect, useState } from 'react'

export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn()
  }, [])
}

export const useMarkdown = (url: string): { markdown: string } => {
  const [markdown, setMarkdown] = useState('')
  useMount(() => {
    fetch(url)
      .then((md) => md.text())
      .then((m) => setMarkdown(m))
      .catch(() => setMarkdown(''))
  })

  return {
    markdown
  }
}
