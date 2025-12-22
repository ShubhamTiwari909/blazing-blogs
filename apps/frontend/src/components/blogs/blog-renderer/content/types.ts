import { Page } from "@/payload-types"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

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
  