import React from 'react'
import LinkPreviewCard from './LinkPreview'
import CodeRenderer from './CodeRenderer'
import { MarkdownRenderer } from './MarkdownRenderer'
import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import YoutubeIframe from './YoutubeIframe'
import type { ContentProps, Meta } from '../types'

const Content = ({ docs, draft }: ContentProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {draft && <RefreshRouteOnSave />}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-10 lg:p-8">
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
