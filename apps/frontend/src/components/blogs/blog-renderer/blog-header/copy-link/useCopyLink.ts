import posthog from 'posthog-js'
import { useState } from 'react'

export const useCopyLink = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopied(true)

    // Capture blog link copied event
    posthog.capture('blog_link_copied', {
      url: window.location.href,
      pathname: window.location.pathname,
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return { isCopied, handleCopyLink }
}
