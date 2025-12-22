import type { Page } from '@/payload-types'

export type PageSlug = {
  slug: Page['slug']
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


export type HasNextProps = {
  handleLoadMore: () => void
  isFetchingNextPage: boolean
}

export type ErrorProp = {
  error: Error | null
}