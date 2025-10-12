import React from 'react'
import CodeRenderer from '@/components/blogs/CodeRenderer'
import { MarkdownRenderer } from '@/components/blogs/MarkdownRenderer'
import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import { Page } from '@/payload-types'
import LinkPreviewCard, { Meta } from './LinkPreview'
import BlogHeader from './blog-header/BlogHeader'
import BackgroundImage from './BackgroundImage'
import BlogHeaderStrip from './blog-header/BlogHeaderStrip'

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {draft && <RefreshRouteOnSave />}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-10 lg:p-8">
            {docs?.map((block) => {
              return (
                <div key={block.id} className="mb-8 last:mb-0">
                  {block.blockType === 'content' && block.content && (
                    <MarkdownRenderer data={block.content} />
                  )}
                  {block.blockType === 'codeBlock' && block.codeBlock && (
                    <CodeRenderer code={block.codeBlock} />
                  )}
                  {block.blockType === 'linkPreview' && block.link && (
                    <LinkPreviewCard meta={block.preview as Meta} link={block.link} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <BackgroundImage />
    </>
  )
}

export default BlogRenderer
