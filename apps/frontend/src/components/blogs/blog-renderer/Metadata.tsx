import { CalendarDays, User } from 'lucide-react'
import React from 'react'
import Tags from './Tags'
import LikesWrapper from '../likes/LikesWrapper'
import ViewsWrapper from '../views/ViewsWrapper'
import AiAnalysis from '../AiAnalysis/AiAnalysis'
import { Page } from '@/payload-types'

const Metadata = async ({
  id,
  author,
  createdAt,
  tags,
  aiSummary,
}: {
  id: string
  author: string
  createdAt: string
  tags: { tag: string; id?: string | null | undefined }[] | null | undefined
  aiSummary: Page["content"]["aiSummary"]
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-6">
        {/* Author */}
        {author && (
          <div className="flex items-center text-gray-600">
            <User className="w-5 h-5 mr-2" />
            <span className="font-medium">{author}</span>
          </div>
        )}

        {/* Date */}
        <div className="flex items-center text-gray-600">
          <CalendarDays className="w-5 h-5 mr-2" />
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && <Tags tags={tags} />}
      </div>
      <div className="flex items-center gap-4">
        <ViewsWrapper id={id} />
        <LikesWrapper id={id} />
        <AiAnalysis aiSummary={aiSummary} />
      </div>
    </div>
  )
}

export default Metadata
