import { Typography } from '@/components/atoms/typography'
import { HasNextProps } from './types'
import React from 'react'

const HasNext = ({ handleLoadMore, isFetchingNextPage }: HasNextProps) => {
  return (
    <div className="mt-12 text-center">
      <button
        className="group relative inline-flex transform cursor-pointer items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => handleLoadMore()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            <Typography as='p' size="xxs" color="inherit" weight="medium">Loading...</Typography>
          </>
        ) : (
          <>
            <Typography as='p' size="xxs" color="inherit" weight="medium">Load More Articles</Typography>
            <svg
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  )
}

export default HasNext
