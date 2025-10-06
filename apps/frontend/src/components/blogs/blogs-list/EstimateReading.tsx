import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import React from 'react'
import { Page } from '@/payload-types'

const EstimateReading = ({ data }: { data: Page['content'] }) => {
  const blocks = data.blocks
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return <p className="text-base text-gray-500 min-w-20">{readingTime}</p>
}

export default EstimateReading
