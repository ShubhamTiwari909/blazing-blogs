import { Tag } from 'lucide-react'
import React from 'react'
import type { TagsProps } from './types'

const Tags = ({
  tags,
}: TagsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Tag className="w-5 h-5 text-gray-600" />
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag.id}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
          >
            {tag.tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Tags
