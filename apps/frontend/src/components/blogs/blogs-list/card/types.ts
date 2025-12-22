import { Page } from '@/payload-types'

export type PageSlug = {
  slug: Page['slug']
}

export type BlogCardProps = PageSlug & {
  id: Page['id']
  content: Page['content']
  createdAt: Page['createdAt']
}
export type BlogImageProps = {
  src: string
  alt: string
}
export type EstimateReadingProps = {
  data: Page['content']['blocks']
}

export type MetaDataProps = {
  author: Page['content']['author']
  createdAt: Page['createdAt']
}
