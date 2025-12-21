'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { LuCheck, LuCopy } from 'react-icons/lu'

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
      {isCopied ? (
        <LuCheck className="h-4 w-4 text-gray-900" />
      ) : (
        <LuCopy className="h-4 w-4 text-gray-900" />
      )}
    </Button>
  )
}

export default CopyLink
