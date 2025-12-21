import type { EstimateReadingProps } from '@/components/blogs/blogs-list/types'
import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import React from 'react'
import { Typography } from '@/components/atoms/typography'

const EstimateReading = ({ data }: EstimateReadingProps) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return <Typography as='p' size="xxs" color="secondary" className="text-base">{readingTime}</Typography>
}

export default EstimateReading
