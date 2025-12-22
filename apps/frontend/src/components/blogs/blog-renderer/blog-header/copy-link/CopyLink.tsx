'use client'
import { LuCheck, LuCopy } from 'react-icons/lu'
import { Button } from '@/components/ui/Button'
import React from 'react'
import { useCopyLink } from './useCopyLink'

const CopyLink = () => {
 const { isCopied, handleCopyLink } = useCopyLink()
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
