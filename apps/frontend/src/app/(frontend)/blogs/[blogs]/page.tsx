import { draftMode } from 'next/headers'
import React from 'react'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { fetchBlogView, pageData } from '@/lib/fetch-utils'
import { Props } from '@/lib/types'

const page = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const page = await pageData(params)
  const blogViews = await fetchBlogView(page.docs.id)
  const blogData = page.docs

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogRenderer blogData={blogData} draft={draft} blogViews={blogViews} />
    </div>
  )
}

export default page
