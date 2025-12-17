import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
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

export type CodeRendererProps = {
  code: string
  language?: string
}

export type ContentProps = { docs: Page['content']['blocks'] }

export type Meta = {
  title: string
  description: string | undefined
  image: string | undefined
  site: string
  url: string
}

export type LinkPreviewCardProps = {
  meta: Meta
  link: string
}

export type MarkdownRendererProps = {
  data: SerializedEditorState
}

export type YoutubeIframeProps = {
  ytIframe: string
}
