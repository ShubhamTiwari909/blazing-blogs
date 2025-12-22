import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { Page } from '@/payload-types'

export type ContentProps = { docs: Page['content']['blocks'] }

export type CodeRendererProps = {
  code: string
  language?: string
}

export type YoutubeIframeProps = {
  ytIframe: string
}

export type MarkdownRendererProps = {
  data: SerializedEditorState
}
