import { useInfiniteQuery } from '@tanstack/react-query'
import type { Page } from '@/payload-types'
import type { BlogResponse } from './types'
import { sdk } from '../restapi-sdk'

const fetchBlogs = async (pageParam: number = 1, search?: string): Promise<BlogResponse> => {
  const blogs = await sdk.find({
    collection: 'pages',
    limit: 50,
    page: pageParam,
    ...(search && {
      where: {
        or: [
          {
            'content.title': {
              contains: search,
            },
          },
          {
            'content.shortDescription': {
              contains: search,
            },
          },
        ],
      },
    }),
  })
  return {
    docs: blogs.docs as Page[],
    totalDocs: blogs.totalDocs,
    hasNextPage: blogs.hasNextPage,
    nextPage: blogs.hasNextPage ? pageParam + 1 : undefined,
  }
}

export const useBlogs = (initialData?: BlogResponse, search?: string) => {
  return useInfiniteQuery<BlogResponse, Error>({
    queryKey: ['blogs', search],
    queryFn: ({ pageParam }) => fetchBlogs(pageParam as number, search),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [1],
        }
      : undefined,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
