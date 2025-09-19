import { draftMode } from 'next/headers'
import React from 'react'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { auth } from '@/lib/auth'
import { fetchBlogLikes, fetchBlogView, pageData } from '@/lib/fetch-utils'
import { Props } from '@/lib/types'

const page = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const session = await auth()
  const page = await pageData(params)
  const blogViews = await fetchBlogView(page.docs.id)
  const blogLikes = await fetchBlogLikes({
    id: page.docs.id,
    userName: page.docs.author,
    userEmail: session?.user?.email || '',
    userImage: session?.user?.image || '',
  })
  console.log(blogLikes)
  const blogData = page.docs

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogRenderer blogData={blogData} draft={draft} blogViews={blogViews} blogLikes={blogLikes} />
    </div>
  )
}

export default page
