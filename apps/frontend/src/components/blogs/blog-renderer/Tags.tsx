import { Typography } from '@/components/atoms/typography'
import type { TagsProps } from './types'
import { Tag } from 'lucide-react'
import React from 'react'

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Tag className="h-5 w-5" />
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <Typography
            as="span"
            size="xxs"
            color="inherit"
            weight="medium"
            key={tag.id}
            className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800 transition-colors duration-200 hover:bg-blue-200"
          >
            {tag.tag}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default Tags
