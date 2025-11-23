import React from 'react'
import BlogsList from '@/components/blogs/blogs-list/BlogsList'
import { queryPages } from '@/lib/fetch-utils/query-all-pages'
import type { Metadata } from 'next'
import { DockIcon } from 'lucide-react'

// Force dynamic rendering to prevent static generation
export const dynamic = 'force-dynamic'
export const revalidate = 0

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

const page = async () => {
  const pages = await queryPages({ page: 1, limit: 50 })
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            <DockIcon className="w-4 h-4" />
            {pages?.totalDocs} Blogs
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Latest Blog Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover insights, tutorials, and stories from our community of passionate developers
            and creators
          </p>
        </div>
        {pages && pages.docs.length > 0 ? (
          <BlogsList pages={pages} />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No blogs found</div>
            <p className="text-gray-400 mt-2">Check back later for new content!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
