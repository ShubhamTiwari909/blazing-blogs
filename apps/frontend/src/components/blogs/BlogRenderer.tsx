import React from 'react'
import Image from 'next/image'
import { CalendarDays, User, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CodeRenderer from '@/components/blogs/CodeRenderer'
import { MarkdownRenderer } from '@/components/blogs/MarkdownRenderer'
import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import { contructImageUrl } from '@/lib/utils'
import { Page } from '@/payload-types'
import Comments from './Comments'
import Views from './Views'
import Likes from './Likes'
import { auth } from '@/lib/auth'

const BlogRenderer = async ({ blogData, draft }: { blogData: Page; draft: boolean }) => {
  const docs = blogData.blocks
  const session = await auth()
  const userEmail = session?.user?.email || ''
  return (
    <div>
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Blog Image */}
          {blogData.image && typeof blogData.image === 'object' && (
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
              <Image
                src={contructImageUrl(blogData.image._key as string)}
                alt={blogData.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* Blog Title */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogData.title}
          </h1>

          {/* Blog Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {blogData.shortDescription}
          </p>

          {/* Blog Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6">
              {/* Author */}
              {blogData.author && (
                <div className="flex items-center text-gray-600">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">{blogData.author}</span>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center text-gray-600">
                <CalendarDays className="w-5 h-5 mr-2" />
                <time dateTime={blogData.createdAt}>
                  {new Date(blogData.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Tags */}
              {blogData.tags && blogData.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <div className="flex flex-wrap gap-2">
                    {blogData.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tag.tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Views id={blogData.id} />
              <Likes id={blogData.id} userEmail={userEmail} />
            </div>
          </div>
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
