'use client'
import AnimationBox from '@/components/ui/animations/AnimationBox'
import BlogsListSkeleton from './BlogsListSkeleton'
import { useBlogsList } from './useBlogsList'
import type { BlogsListProps } from './types'
import { LuDock } from 'react-icons/lu'
import BlogCard from './card/BlogCard'
import NoBlogs from './NoBlogs'
import HasNext from './HasNext'
import Error from './Error'

const BlogsList = ({ pages }: BlogsListProps) => {
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
  } = useBlogsList({ pages })

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
      <div className="text-center">
        <AnimationBox className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          <LuDock className="h-4 w-4" />
          {blogs.length} Blogs
        </AnimationBox>
      </div>
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
