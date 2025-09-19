import config from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import BlogRenderer from '@/components/blogs/BlogRenderer'
import { auth } from '@/lib/auth'

type Props = {
  params: Promise<{
    blogs: string
  }>
}

const fetchBlogView = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/views?id=${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    },
  )
  const data = await response.json()
  return data
}

const fetchBlogLikes = async ({
  id,
  userEmail,
}: {
  id: string
  userName: string
  userEmail: string
  userImage: string
}) => {
  if (!id || !userEmail) return null
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/likes?id=${id}&userEmail=${userEmail}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data = await response.json()
  return data
}

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

const pageData = async (paramsPromise: Props['params']) => {
  const { blogs = 'home' } = await paramsPromise

  const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs

  const page = await queryPageBySlug({
    slug: parsedSlug,
  })
  if (!page) {
    return notFound()
  }

  return page
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: config })
  const { isEnabled: draft } = await draftMode()

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    draft,
    overrideAccess: draft,
    depth: 2,
    pagination: false,
    where: {
      slug: {
        equals: `blogs/${slug}`,
      },
    },
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs[0],
    }
  }
})

export default page
