import { Typography } from '@/components/atoms/typography'
import { SiteNameProps } from './types'
import React from 'react'

const SiteName = ({ site }: SiteNameProps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
        <Typography
          as="p"
          size="xxs"
          color="secondary"
          weight="medium"
          className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400"
        >
          {site}
        </Typography>
      </div>
      <div className="flex items-center text-xs font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-400">
        <Typography as="p" size="xxs" color="inherit" weight="medium">
          Visit
        </Typography>
        <svg
          className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  )
}

export default SiteName
