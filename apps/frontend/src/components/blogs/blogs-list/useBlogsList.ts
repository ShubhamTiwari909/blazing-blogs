import { BlogResponse, BlogsListProps } from './types'
import { useBlogs } from '@/lib/hooks/useBlogs'
import { useMemo } from 'react'

export const useBlogsList = ({ pages }: BlogsListProps) => {
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

  return {
    blogs,
    initialData,
    handleLoadMore,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    data,
  }
}
