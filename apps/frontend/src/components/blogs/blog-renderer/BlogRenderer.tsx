import React from 'react'
import BlogHeader from './blog-header/BlogHeader'
import BackgroundImage from './BackgroundImage'
import BlogHeaderStrip from './blog-header/BlogHeaderStrip'
import Content from './content/Content'
import type { BlogRendererProps } from './types'

const BlogRenderer = async ({ blogData, blogId, createdAt, draft, featureFlags }: BlogRendererProps) => {
  const docs = blogData.blocks
  return (
    <>
      {/* Back Button - Sticky Header */}
      <BlogHeaderStrip />

      <div>
        {/* Blog Header */}
        <BlogHeader blogData={blogData} blogId={blogId} createdAt={createdAt} featureFlags={featureFlags} />

        {/* Blog Content */}
        <Content docs={docs} draft={draft} />
      </div>
      <BackgroundImage />
    </>
  )
}

export default BlogRenderer
