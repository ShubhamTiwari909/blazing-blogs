import React from 'react'
import AiRenderer from './AiRenderer'
import type { AiSummary } from './types'

const AiAnalysis = ({ aiSummary }: AiSummary) => {
  if (!aiSummary) return null
  return (
    <div className="flex flex-wrap items-center gap-5">
      <AiRenderer aiSummary={aiSummary} />
    </div>
  )
}

export default AiAnalysis
