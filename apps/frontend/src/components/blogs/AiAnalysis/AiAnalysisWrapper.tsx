'use client'
import React from 'react'
import { CookiesProvider } from 'react-cookie'
import AiAnalysis from './AiAnalysis'
import { Page } from '@/payload-types'

const AiAnalysisWrapper = ({ blocks, blogId }: { blocks: Page['content']['blocks'], blogId: string }) => {
  return (
    <CookiesProvider>
      <AiAnalysis blocks={blocks} blogId={blogId} />
    </CookiesProvider>
  )
}

export default AiAnalysisWrapper
