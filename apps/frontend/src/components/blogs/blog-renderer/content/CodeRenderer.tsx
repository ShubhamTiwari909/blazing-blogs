'use client'
import type { CodeRendererProps } from '@/components/blogs/blog-renderer/types'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from 'react'
import Prism from 'prismjs'

export default function CodeRenderer({ code, language = 'javascript' }: CodeRendererProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre suppressHydrationWarning className={`language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}
