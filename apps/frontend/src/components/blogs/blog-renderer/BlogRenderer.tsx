import React from 'react'
import BlogHeader from './blog-header/BlogHeader'
import BlogHeaderStrip from './blog-header/BlogHeaderStrip'
import Content from './content/Content'
import type { BlogRendererProps } from './types'
import BackgroundTheme from './BackgroundTheme'

const BlogRenderer = async ({ blogData, blogId, createdAt, featureFlags }: BlogRendererProps) => {
  const docs = blogData.blocks
  return (
    <>
      {/* Back Button - Sticky Header */}
      <BlogHeaderStrip />

      <div className='relative z-10'>
        {/* Blog Header */}
        <BlogHeader blogData={blogData} blogId={blogId} createdAt={createdAt} featureFlags={featureFlags} />

        {/* Blog Content */}
        <Content docs={docs} />
      </div>
      <BackgroundTheme />
    </>
  )
}

export default BlogRenderer
