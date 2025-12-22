import type { Page } from '@/payload-types'

export type BlogHeaderProps = {
  blog: Page
}

export type BlogHeaderWrapperProps = {
  children: React.ReactNode
}

export type BlogRendererProps = {
  blog: Page
}

export type BlogImageProps = {
  src: string
  alt: string
}
export type TagsProps = {
  tags: Page['content']['tags']
}

export type MetadataProps = TagsProps & {
  id: Page['id']
  author: Page['content']['author']
  createdAt: Page['createdAt']
  aiSummary: Page['content']['aiSummary']
  blocks: Page['content']['blocks']
  featureFlags: Page['featureFlags']
}

export type Meta = {
  title: string
  description: string | undefined
  image: string | undefined
  site: string
  url: string
}
