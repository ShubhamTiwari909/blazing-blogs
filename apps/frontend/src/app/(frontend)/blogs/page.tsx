import React from 'react'
import BlogsList from '@/components/blogs/blogs-list/BlogsList'
import { queryPages } from '@/lib/fetch-utils/query-all-pages'
import type { Metadata } from 'next'

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
        <BlogsList pages={pages} />
      </div>
    </div>
  )
}

export default page
