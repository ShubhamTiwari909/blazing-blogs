import { useState } from 'react'

export const useCopyLink = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return { isCopied, handleCopyLink }
}
