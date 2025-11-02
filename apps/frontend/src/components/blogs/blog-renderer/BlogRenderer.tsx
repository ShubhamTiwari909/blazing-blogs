import React from 'react'
import { Page } from '@/payload-types'
import BlogHeader from './blog-header/BlogHeader'
import BackgroundImage from './BackgroundImage'
import BlogHeaderStrip from './blog-header/BlogHeaderStrip'
import Content from './content/Content'

const BlogRenderer = async ({
  blogData,
  blogId,
  createdAt,
  draft,
}: {
  blogData: Page['content']
  blogId: Page['id']
  createdAt: Page['createdAt']
  draft: boolean
}) => {
  const docs = blogData.blocks
  return (
    <>
      {/* Back Button - Sticky Header */}
      <BlogHeaderStrip />

      <div>
        {/* Blog Header */}
        <BlogHeader blogData={blogData} blogId={blogId} createdAt={createdAt} />

        {/* Blog Content */}
        <Content docs={docs} draft={draft} />
      </div>
      <BackgroundImage />
    </>
  )
}

export default BlogRenderer
