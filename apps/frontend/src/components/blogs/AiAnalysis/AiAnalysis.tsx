import React from 'react'
import AiRenderer from './AiRenderer'
import { Page } from '@/payload-types'

const AiAnalysis = ({
  aiSummary
}: {
  aiSummary: Page["content"]["aiSummary"]
}) => {

  return (
    <div className="flex flex-wrap items-center gap-5">
      <AiRenderer aiSummary={aiSummary} />
    </div>
  )
}

export default AiAnalysis
