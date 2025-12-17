import BlogsList from '@/components/blogs/blogs-list/BlogsList'
import { queryPages } from '@/lib/fetch-utils/query-all-pages'
import { unstable_cache } from 'next/cache'
import { DockIcon } from 'lucide-react'
import type { Metadata } from 'next'
import React from 'react'

// Force dynamic rendering to prevent static generation
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blogs | Blazing Blogs',
  description:
    'A collection of blogs written by Shubham and his team mostly about web development and AI.',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/blogs',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/blogs',
    },
  },
  openGraph: {
    title: 'Blogs | Blazing Blogs',
    description:
      'A collection of blogs written by Shubham and his team mostly about web development and AI.',
    url: 'https://blazing-blogs-frontend.vercel.app/blogs',
  },
  twitter: {
    title: 'Blogs | Blazing Blogs',
    description:
      'A collection of blogs written by Shubham and his team mostly about web development and AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Create cached versions of data fetching functions
const getCachedPageData = unstable_cache(
  async () => {
    return await queryPages({ page: 1, limit: 50 })
  },
  ['blogs-list'],
  {
    revalidate: 86400, // 24 hours
    tags: ['blogs-list'],
  },
)

const page = async () => {
  const pages = await getCachedPageData()
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <DockIcon className="h-4 w-4" />
            {pages?.totalDocs} Blogs
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-5xl font-bold text-transparent">
            Latest Blog Posts
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover insights, tutorials, and stories from our community of passionate developers
            and creators
          </p>
        </div>
        {pages && pages.docs.length > 0 ? (
          <BlogsList pages={pages} />
        ) : (
          <div className="py-12 text-center">
            <div className="text-lg text-gray-500">No blogs found</div>
            <p className="mt-2 text-gray-400">Check back later for new content!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
