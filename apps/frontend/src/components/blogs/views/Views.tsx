import { Typography } from '@/components/atoms/typography'
import React from 'react'
import type { ViewsProps } from './types'
import { LuEye } from 'react-icons/lu'
import { useViews } from './useViews'

const Views = ({ id }: ViewsProps) => {
  const { blogViews, error } = useViews({ id })
  return (
    <div className="flex items-center gap-1">
      <LuEye className="h-4 w-4" />
      <Typography as="p" size="xxs" color="inherit">
        {blogViews}
      </Typography>
      {error ? (
        <Typography as="p" size="xxs" color="inherit">
          {error?.message ? 'Error updating views, please try again later' : null}
        </Typography>
      ): null}
    </div>
  )
}

export default Views
