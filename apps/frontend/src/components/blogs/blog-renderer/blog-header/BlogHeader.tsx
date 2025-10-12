import ShareToLinkedIn from '@/components/share/linkedin'
import React from 'react'
import Metadata from '../Metadata'
import EstimateReading from '../../blogs-list/EstimateReading'
import { BlogImage } from '../Image'
import { contructImageUrl } from '@/lib/utils'
import { Page } from '@/payload-types'
import BlogHeaderWrapper from './BlogHeaderWrapper'

const BlogHeader = ({ blogData, blogId, createdAt }: { blogData: Page['content'], blogId: Page['id'], createdAt: Page['createdAt'] }) => {
  return (
    <BlogHeaderWrapper>
      {/* Blog Image */}
      {blogData.image && typeof blogData.image === 'object' && (
        <BlogImage src={contructImageUrl(blogData.image._key as string)} alt={blogData.title} />
      )}

      {/* Blog Title */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight">
          {blogData.title}
        </h1>
        <EstimateReading data={blogData} />
      </div>

      {/* Blog Description */}
      <p className="text-lg md:text-xl mb-8 leading-relaxed">{blogData.shortDescription}</p>

      <Metadata
        id={blogId}
        author={blogData.author}
        createdAt={createdAt}
        tags={blogData.tags}
        aiSummary={blogData.aiSummary}
      />
      <div className="flex justify-end mt-2">
        <ShareToLinkedIn />
      </div>
    </BlogHeaderWrapper>
  )
}

export default BlogHeader
