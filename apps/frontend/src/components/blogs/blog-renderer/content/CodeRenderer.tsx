'use client'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from 'react'
import type { CodeRendererProps } from '../types'

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
