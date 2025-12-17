import type { EstimateReadingProps } from '@/components/blogs/blogs-list/types'
import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import React from 'react'

const EstimateReading = ({ data }: EstimateReadingProps) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return <p className="text-base">{readingTime}</p>
}

export default EstimateReading
