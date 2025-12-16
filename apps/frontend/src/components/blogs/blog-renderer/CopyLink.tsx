'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

const CopyLink = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return (
    <Button variant="outline" className="cursor-pointer text-center" onClick={handleCopyLink}>
      {isCopied ? <Check className="w-4 h-4 text-gray-900" /> : <Copy className="w-4 h-4 text-gray-900" />}
    </Button>
  )
}

export default CopyLink
