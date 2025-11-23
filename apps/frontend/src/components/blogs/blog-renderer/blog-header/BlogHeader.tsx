import ShareToLinkedIn from '@/components/share/linkedin'
import React from 'react'
import Metadata from '../Metadata'
import { BlogImage } from '../Image'
import { contructImageUrl } from '@/lib/utils'
import BlogHeaderWrapper from './BlogHeaderWrapper'
import type { BlogHeaderProps } from '../types'

const BlogHeader = ({ blogData, blogId, createdAt }: BlogHeaderProps) => {
  return (
    <BlogHeaderWrapper>
      {/* Blog Image */}
      {blogData.image && typeof blogData.image === 'object' && (
        <BlogImage src={contructImageUrl(blogData.image._key as string)} alt={blogData.title} />
      )}

      {/* Blog Title */}
      <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight">{blogData.title}</h1>

      {/* Blog Description */}
      <p className="text-lg md:text-xl mb-8 leading-relaxed">{blogData.shortDescription}</p>

      <Metadata
        id={blogId}
        author={blogData.author}
        createdAt={createdAt}
        tags={blogData.tags}
        aiSummary={blogData.aiSummary}
        blocks={blogData.blocks}
      />
      <div className="flex justify-end mt-2">
        <ShareToLinkedIn />
      </div>
    </BlogHeaderWrapper>
  )
}

export default BlogHeader
