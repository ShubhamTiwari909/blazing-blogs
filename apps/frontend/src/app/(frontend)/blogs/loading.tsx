import BlogsListSkeleton from '@/components/blogs/blogs-list/BlogsListSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogsListSkeleton />
      </div>
    </div>
  )
}

export default loading
