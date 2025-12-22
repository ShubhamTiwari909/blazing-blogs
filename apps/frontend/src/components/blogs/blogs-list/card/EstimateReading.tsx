import type { EstimateReadingProps } from './types'
import { calculateReadingTime, convertToPlaintext } from '@/lib/utils'
import { Typography } from '@/components/atoms/typography'
import React from 'react'

const EstimateReading = ({ data }: EstimateReadingProps) => {
  const blocks = data
  const text = convertToPlaintext({ dataBlocks: blocks })
  const readingTime = calculateReadingTime(text)
  return (
    <Typography as="p" size="xxs" color="secondary" className="text-base">
      {readingTime}
    </Typography>
  )
}

export default EstimateReading
