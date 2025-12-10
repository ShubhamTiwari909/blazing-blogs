import type { Page } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type BlogHeaderProps = {
  blogData: Page['content']
  blogId: Page['id']
  createdAt: Page['createdAt']
  featureFlags: Page['featureFlags']
}

export type BlogHeaderWrapperProps = {
  children: React.ReactNode
}

export type BlogRendererProps = BlogHeaderProps & {
  draft: boolean
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

export type ContentProps = { docs: Page['content']['blocks']; draft: boolean }

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
