import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { getCachedBlogData } from '@/lib/fetch-utils/fetch-blogs'
import { pageData } from '@/lib/fetch-utils/fetch-utils'
import { queryPages } from '@/lib/fetch-utils/query-all-pages'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { connection } from 'next/server'
import { getMetadata } from './metadata'
import { Props } from '@/lib/types'

export async function generateMetadata({ params }: Props) {
  return await getMetadata({ params })
}

export const generateStaticParams = async () => {
  const blogs = await queryPages({ page: 1, limit: 2000 })
  return (
    blogs?.docs?.map((blog) => ({
      blogs: [blog.slug],
    })) || []
  )
}

const BlogPage = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const resolvedParams = await params

  let page

  if (draft) {
    await connection()
    page = await pageData(resolvedParams, { draft: true })
  } else {
    page = await getCachedBlogData(resolvedParams)
  }

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
