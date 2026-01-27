import type { AiSummary } from './types'
import AiRenderer from './AiRenderer'

const AiAnalysis = ({ aiSummary }: AiSummary) => {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <AiRenderer aiSummary={aiSummary} />
    </div>
  )
}

export default AiAnalysis
