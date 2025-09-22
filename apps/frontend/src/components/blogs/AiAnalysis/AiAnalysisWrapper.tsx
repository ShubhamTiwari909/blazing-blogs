'use client'
import React from 'react'
import { CookiesProvider } from 'react-cookie'
import AiAnalysis from './AiAnalysis'
import { Page } from '@/payload-types'

const AiAnalysisWrapper = ({ blocks }: { blocks: Page['content']['blocks'] }) => {
  return (
    <CookiesProvider>
      <AiAnalysis blocks={blocks} />
    </CookiesProvider>
  )
}

export default AiAnalysisWrapper
