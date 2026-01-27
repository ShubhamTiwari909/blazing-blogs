'use client'
import BlogsListSkeleton from '@/components/blogs/blogs-list/BlogsListSkeleton'
import { useBlogsList } from '@/components/blogs/blogs-list/useBlogsList'
import type { BlogsListProps } from '@/components/blogs/blogs-list/types'
import BlogCard from '@/components/blogs/blogs-list/card/BlogCard'
import NoBlogs from '@/components/blogs/blogs-list/NoBlogs'
import HasNext from '@/components/blogs/blogs-list/HasNext'
import Error from '@/components/blogs/blogs-list/Error'

const BlogsSearchList = ({ pages, search }: BlogsListProps) => {
  const {
    blogs,
    initialData,
    data,
    handleLoadMore,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useBlogsList({ pages, search })

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

export default BlogsSearchList
