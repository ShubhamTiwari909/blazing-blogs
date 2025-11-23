import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import React from 'react'
import type { EstimateReadingProps } from './types'

const EstimateReading = ({ data }: EstimateReadingProps) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return <p className="text-base">{readingTime}</p>
}

export default EstimateReading
