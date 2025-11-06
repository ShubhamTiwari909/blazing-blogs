'use client'
import { Page } from '@/payload-types'
import React, { useMemo } from 'react'
import BlogCard from './BlogCard'
import { DockIcon } from 'lucide-react'
import { useBlogs } from '@/lib/hooks/useBlogs'

type BlogResponse = {
  docs: Page[]
  totalDocs: number
  hasNextPage: boolean
  nextPage?: number
}

type Props =
  | {
      type: string
      docs: Page[]
      totalDocs: number
      hasNextPage: boolean
    }
  | undefined

const BlogsList = ({ pages }: { pages: Props }) => {
  // Initialize the initial data for the query
  const initialData = pages
    ? {
        docs: pages.docs,
        totalDocs: pages.totalDocs,
        hasNextPage: pages.hasNextPage,
        nextPage: pages.hasNextPage ? 2 : undefined,
      }
    : undefined

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
    useBlogs(initialData)

  // Flatten all pages into a single array of blogs
  const blogs = useMemo(() => {
    return data?.pages?.flatMap((page) => (page as BlogResponse).docs) || pages?.docs || []
  }, [data?.pages, pages?.docs])

  // Get total docs from the latest page or initial data
  const totalDocs = data?.pages?.[data.pages.length - 1]?.totalDocs || pages?.totalDocs || 0

  const handleLoadMore = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }

  // Handle loading state
  if (isLoading && !initialData) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <div className="text-gray-500 text-lg mt-4">Loading blogs...</div>
      </div>
    )
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg">Failed to load blogs</div>
        <p className="text-gray-400 mt-2">Please try again later</p>
        {error && <p className="text-gray-300 mt-1 text-sm">Error: {error.message}</p>}
      </div>
    )
  }

  // Handle no blogs state
  if (!pages && (!data || blogs.length === 0)) {
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
          {totalDocs} Blogs
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
            className="cursor-pointer group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={() => handleLoadMore()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Loading...</span>
              </>
            ) : (
              <>
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
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogsList
