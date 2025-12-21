import type { PageSlug } from '@/components/blogs/blogs-list/types'
import Link from 'next/link'
import React from 'react'
import { Typography } from '@/components/atoms/typography'

const ReadMore = ({ slug }: PageSlug) => {
  return (
    <Link
      href={`/${slug}`}
      className="group inline-flex transform items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
    >
      <Typography as='p' size="xxs" color="inherit" weight="medium">Read Article</Typography>
      <svg
        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

export default ReadMore
