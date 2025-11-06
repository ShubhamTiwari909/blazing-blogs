import { useInfiniteQuery } from '@tanstack/react-query'
import { Page } from '@/payload-types'

type BlogResponse = {
  docs: Page[]
  totalDocs: number
  hasNextPage: boolean
  nextPage?: number
}

const fetchBlogs = async (pageParam: number = 1): Promise<BlogResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/pages?limit=50&page=${pageParam}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }
  const data = await response.json()
  return {
    ...data,
    nextPage: data.hasNextPage ? pageParam + 1 : undefined,
  }
}

export const useBlogs = (initialData?: BlogResponse) => {
  return useInfiniteQuery<BlogResponse, Error>({
    queryKey: ['blogs'],
    queryFn: ({ pageParam }) => fetchBlogs(pageParam as number),
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
