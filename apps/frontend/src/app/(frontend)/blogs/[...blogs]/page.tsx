import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { getCachedBlogData } from '@/lib/fetch-utils/fetch-blogs'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { Props } from '@/lib/types'
import React from 'react'
import { getMetadata } from './metadata'

// Enable dynamic rendering
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props) {
  return await getMetadata({ params })
}

const BlogPage = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const resolvedParams = await params
  const page = await getCachedBlogData(resolvedParams)
  if (!page.docs) {
    return notFound()
  }
  return (
    <div className="relative min-h-screen">
      {draft && <RefreshRouteOnSave />}
      <BlogRenderer blog={page.docs} />
    </div>
  )
}

export default BlogPage
