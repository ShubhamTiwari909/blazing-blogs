import type { BlogHeaderProps } from '@/components/blogs/blog-renderer/types'
import { BlogImage } from '@/components/blogs/blog-renderer/Image'
import ShareToLinkedIn from '@/components/share/linkedin'
import BlogHeaderWrapper from './BlogHeaderWrapper'
import { contructImageUrl } from '@/lib/utils'
import Metadata from './Metadata'
import React from 'react'

const BlogHeader = ({ blog }: BlogHeaderProps) => {
  const { id, createdAt, featureFlags, content } = blog
  const { title, shortDescription, author, tags, aiSummary, blocks, image } = content
  return (
    <BlogHeaderWrapper>
      {/* Blog Image */}
      {image && typeof image === 'object' && (
        <BlogImage src={contructImageUrl(image._key as string)} alt={title} />
      )}

      {/* Blog Title */}
      <h1 className="mb-5 text-2xl leading-tight font-bold md:text-5xl lg:text-5xl">{title}</h1>

      {/* Blog Description */}
      <p className="mb-8 text-lg leading-relaxed md:text-xl">{shortDescription}</p>

      <Metadata
        id={id}
        author={author}
        createdAt={createdAt}
        tags={tags}
        aiSummary={aiSummary}
        blocks={blocks}
        featureFlags={featureFlags}
      />
      <div className="mt-2 flex justify-end">
        <ShareToLinkedIn />
      </div>
    </BlogHeaderWrapper>
  )
}

export default BlogHeader
