import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import React from 'react'
import { Page } from '@/payload-types'

const EstimateReading = ({ data }: { data: Page['content']['blocks'] }) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return <p className="text-base">{readingTime}</p>
}

export default EstimateReading
