'use client'
import { Page } from '@/payload-types'
import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { DockIcon } from 'lucide-react'

type Props =
  | {
      type: string
      docs: Page[]
      totalDocs: number
      hasNextPage: boolean
    }
  | undefined

const BlogsList = ({ pages }: { pages: Props }) => {
  const [blogs, setBlogs] = useState(pages?.docs || [])
  const [hasNextPage, setHasNextPage] = useState(pages?.hasNextPage)
  const [pageNumber, setPageNumber] = useState(1)

  const handleLoadMore = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages?limit=50&page=${pageNumber + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs([...(blogs || []), ...data.docs])
        setHasNextPage(data.hasNextPage)
        setPageNumber(pageNumber + 1)
      })
  }

  if (!pages) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No blogs found</div>
        <p className="text-gray-400 mt-2">Check back later for new content!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
          <DockIcon className="w-4 h-4" />
          {pages?.totalDocs} Blogs
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
          Latest Blog Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover insights, tutorials, and stories from our community of passionate developers and
          creators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((page) => (
          <BlogCard key={page.id} page={page} />
        ))}
      </div>

      {hasNextPage && (
        <div className="text-center mt-12">
          <button
            className="cursor-pointer group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out"
            onClick={() => handleLoadMore()}
          >
            <span>Load More Articles</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogsList
