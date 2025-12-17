import type { MetaDataProps } from '@/components/blogs/blogs-list/types'
import { CalendarDays, User } from 'lucide-react'
import React from 'react'

const MetaData = ({ author, createdAt }: MetaDataProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
      <div className="flex items-center space-x-4">
        {author && (
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span className="truncate">{author}</span>
          </div>
        )}
        <div className="flex items-center">
          <CalendarDays className="mr-1 h-4 w-4" />
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </div>
  )
}

export default MetaData
