'use client'

import type { ArrayRowLabelProps } from './types'
import { useRowLabel } from '@payloadcms/ui'

export default function ArrayRowLabel({ label }: ArrayRowLabelProps) {
  const { data } = useRowLabel<{ [key: string]: string }>()

  const customLabel = data[label]
    ? `${data[label]?.slice(0, 80)}${data[label]?.length > 80 ? '...' : ''}`
    : label[0]?.toUpperCase() + label.slice(1)

  return <div>{customLabel}</div>
}
