import type { Page } from '@/payload-types'

export type PageSlug = {
  slug: Page['slug']
}

export type BlogCardProps = PageSlug & {
  id: Page['id']
  content: Page['content']
  createdAt: Page['createdAt']
}

export type BlogResponse = {
  docs: Page[]
  totalDocs: number
  hasNextPage: boolean
  nextPage?: number
}

export type BlogsListProps = {
  pages: {
    type: string
    docs: Page[]
    totalDocs: number
    hasNextPage: boolean
  }
}

export type EstimateReadingProps = {
  data: Page['content']['blocks']
}

export type MetaDataProps = {
  author: Page['content']['author']
  createdAt: Page['createdAt']
}

export type HasNextProps = {
  handleLoadMore: () => void
  isFetchingNextPage: boolean
}
