import React from 'react'
import { Typography } from '@/components/atoms/typography'
import { ErrorProp } from './types'

const Error = ({ error }: ErrorProp) => {
    return (
        <div className="py-12 text-center">
          <div className="text-lg text-red-500">Failed to load blogs</div>
          <Typography as="p" size="xxs" color="inherit" className="mt-2 text-gray-400">
            Please try again later
          </Typography>
          {error && (
            <Typography as="p" size="xxs" color="inherit" className="mt-1 text-sm text-gray-300">
              Error: {error.message}
            </Typography>
          )}
        </div>
      )
}

export default Error