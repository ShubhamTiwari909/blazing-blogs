import { Meta } from '@/components/blogs/blog-renderer/types'

export type PreviewLink = { link: string }

export type SiteNameProps = {
  site: string
}
export type LinkPreviewCardProps = {
  meta: Meta
  link: string
}

export type PreviewImageProps = {
  src: string | undefined
  alt: string
}

export type SiteContentProps = {
  title: string | undefined
  description: string | undefined
}
