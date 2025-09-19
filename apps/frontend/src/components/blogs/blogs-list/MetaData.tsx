import { CalendarDays, User } from 'lucide-react'
import React from 'react'

const MetaData = ({ author, createdAt }: { author: string; createdAt: string }) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
      <div className="flex items-center space-x-4">
        {author && (
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span className="truncate">{author}</span>
          </div>
        )}
        <div className="flex items-center">
          <CalendarDays className="w-4 h-4 mr-1" />
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
