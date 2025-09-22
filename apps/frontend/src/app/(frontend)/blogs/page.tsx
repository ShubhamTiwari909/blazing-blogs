import React from 'react'
import BlogsList from '@/components/blogs/blogs-list/BlogsList'
import { queryPages } from '@/lib/fetch-utils'

// Force dynamic rendering to prevent static generation
export const dynamic = 'force-dynamic'
export const revalidate = 0

const page = async () => {
  const pages = await queryPages()
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsList pages={pages} />
      </div>
    </div>
  )
}

export default page
