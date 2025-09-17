"use client"
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect, useState } from 'react'

export default function CodeRenderer({ code, language = "javascript"}: { code: string, language?: string }) {
    const [isCopied, setIsCopied] = useState(false)
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre suppressHydrationWarning className={`language-${language} relative !my-5`}>
      <code className={`language-${language}`}>{code}</code>
      <button className='absolute top-4 right-4 cursor-pointer' onClick={() => {
        navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      }}> {isCopied ? <span className='text-sm text-green-500'>Copied</span> : 'Copy'}</button>
    </pre>
  )
}
