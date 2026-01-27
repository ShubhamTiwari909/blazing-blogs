import { MarkdownRenderer } from './markdown-renderer/MarkdownRenderer'
import { Meta } from '@/components/blogs/blog-renderer/types'
import YoutubeIframe from './youtube-iframe/YoutubeIframe'
import LinkPreviewCard from './link-preview/LinkPreview'
import type { ContentProps } from './types'
import CodeRenderer from './CodeRenderer'

const Content = ({ docs }: ContentProps) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-100 bg-white px-5 py-10 shadow-sm lg:p-8">
        {docs?.map((block) => {
          return (
            <div key={block.id} className="mb-8 last:mb-0">
              {block.blockType === 'content' && block.content ? (
                <MarkdownRenderer data={block.content} />
              ) : null}
              {block.blockType === 'codeBlock' && block.codeBlock ? (
                <CodeRenderer code={block.codeBlock} />
              ) : null}
              {block.blockType === 'linkPreview' && block.link ? (
                <LinkPreviewCard meta={block.preview as Meta} link={block.link} />
              ) : null}
              {block.blockType === 'ytIframe' && block.ytIframe ? (
                <YoutubeIframe ytIframe={block.ytIframe} />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
