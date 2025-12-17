'use client'
import type { BlogResponse, BlogsListProps } from './types'
import BlogsListSkeleton from './BlogsListSkeleton'
import { useBlogs } from '@/lib/hooks/useBlogs'
import BlogCard from './card/BlogCard'
import React, { useMemo } from 'react'
import HasNext from './HasNext'

const BlogsList = ({ pages }: BlogsListProps) => {
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

  const handleLoadMore = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }

  // Handle loading state
  if (isLoading && !initialData) {
    return <BlogsListSkeleton />
  }

  // Handle error state
  if (isError) {
    return (
      <div className="py-12 text-center">
        <div className="text-lg text-red-500">Failed to load blogs</div>
        <p className="mt-2 text-gray-400">Please try again later</p>
        {error && <p className="mt-1 text-sm text-gray-300">Error: {error.message}</p>}
      </div>
    )
  }

  // Handle no blogs state
  if (!pages && (!data || blogs.length === 0)) {
    return (
      <div className="py-12 text-center">
        <div className="text-lg text-gray-500">No blogs found</div>
        <p className="mt-2 text-gray-400">Check back later for new content!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((page) => (
          <BlogCard
            key={page.id}
            id={page.id}
            content={page.content}
            createdAt={page.createdAt}
            slug={page.slug}
          />
        ))}
      </div>

      {hasNextPage && (
        <HasNext handleLoadMore={handleLoadMore} isFetchingNextPage={isFetchingNextPage} />
      )}
    </div>
  )
}

export default BlogsList
