'use client'
import type { BlogsListProps } from './types'
import BlogsListSkeleton from './BlogsListSkeleton'
import BlogCard from './card/BlogCard'
import React from 'react'
import HasNext from './HasNext'
import { useBlogsList } from './useBlogsList'
import Error from './Error'
import NoBlogs from './NoBlogs'

const BlogsList = ({ pages }: BlogsListProps) => {
  const { blogs, initialData, data, handleLoadMore, isFetchingNextPage, hasNextPage, isLoading, isError, error } = useBlogsList({ pages })
  // Handle loading state
  if (isLoading && !initialData) {
    return <BlogsListSkeleton />
  }

  // Handle error state
  if (isError) {
    return <Error error={error} />
  }

  // Handle no blogs state
  if (!pages && (!data || blogs.length === 0)) {
    return <NoBlogs />
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
