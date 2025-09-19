import React from 'react'
import CodeRenderer from '@/components/blogs/CodeRenderer'
import { MarkdownRenderer } from '@/components/blogs/MarkdownRenderer'
import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import { contructImageUrl } from '@/lib/utils'
import { Page } from '@/payload-types'
import Comments from '../Comments'
import BackButton from './BackButton'
import { BlogImage } from './Image'
import Metadata from './Metadata'

const BlogRenderer = async ({
  blogData,
  draft,
  blogViews,
}: {
  blogData: Page
  draft: boolean
  blogViews: { blogsCount: number }
}) => {
  const docs = blogData.blocks
  return (
    <div>
      {/* Back Button */}
      <BackButton />

      {/* Blog Header */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Blog Image */}
          {blogData.image && typeof blogData.image === 'object' && (
            <BlogImage src={contructImageUrl(blogData.image._key as string)} alt={blogData.title} />
          )}

          {/* Blog Title */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogData.title}
          </h1>

          {/* Blog Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {blogData.shortDescription}
          </p>

          <Metadata
            id={blogData.id}
            author={blogData.author}
            createdAt={blogData.createdAt}
            tags={blogData.tags}
            blogViews={blogViews}
          />
        </div>
      </div>

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
              </div>
            )
          })}
        </div>
      </div>
      <Comments blogId={blogData.id} />
    </div>
  )
}

export default BlogRenderer
