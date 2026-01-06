import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import { Typography } from '@/components/atoms/typography'
import type { EstimateReadingProps } from './types'
import React from 'react'

const EstimateReading = ({ data }: EstimateReadingProps) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return (
    <Typography as="p" size="xxs" color="inherit" className="text-base">
      {readingTime}
    </Typography>
  )
}

export default EstimateReading
