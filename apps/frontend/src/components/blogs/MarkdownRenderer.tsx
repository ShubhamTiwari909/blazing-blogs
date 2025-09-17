import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

const proseStyles = {
  headings: 'prose-headings:font-bold prose-h1:mt-0 prose-headings:text-slate-800 prose-headings:tracking-tight prose-h1:text-5xl prose-h1:mb-4 prose-h1:leading-tight prose-h1:bg-gradient-to-r prose-h1:from-slate-800 prose-h1:to-slate-600 prose-h1:bg-clip-text prose-h1:text-transparent prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-8 prose-h2:leading-tight prose-h2:text-slate-800 prose-h3:text-3xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:leading-snug prose-h3:text-slate-700 prose-h4:text-2xl prose-h4:mb-3 prose-h4:mt-5 prose-h4:leading-snug prose-h4:text-slate-700',
  paragraphs: 'prose-p:mb-2 prose-p:last:mb-0 prose-p:text-slate-600 prose-p:leading-7 prose-p:my-5 prose-p:font-light prose-p:tracking-wide',
  links: 'prose-a:inline-block prose-a:px-5 prose-a:py-2.5 prose-a:bg-gradient-to-r prose-a:from-indigo-500 prose-a:to-purple-600 prose-a:text-white prose-a:rounded-xl prose-a:font-semibold prose-a:no-underline prose-a:shadow-md prose-a:transition-all prose-a:duration-300 hover:prose-a:from-indigo-600 hover:prose-a:to-purple-700 hover:prose-a:shadow-xl hover:prose-a:scale-105 hover:prose-a:-translate-y-0.5 prose-strong:text-slate-900 prose-strong:font-semibold',
  code: 'prose-code:text-pink-600 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto',
  blockquotes: 'prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600',
  lists: 'prose-ul:my-4 prose-ol:my-4 prose-li:my-1',
  images: 'prose-img:rounded-lg prose-img:shadow-md',
  tables: 'prose-table:border-collapse prose-th:border prose-th:border-slate-300 prose-th:bg-slate-50 prose-th:p-3 prose-th:text-left prose-td:border prose-td:border-slate-300 prose-td:p-3',
  horizontalRules: 'prose-hr:border-slate-300 prose-hr:my-8'
}

export const MarkdownRenderer = ({ data }: { data: SerializedEditorState }) => {
  return (
    <RichText 
      className={`
        prose prose-lg prose-slate
        ${proseStyles.headings}
        ${proseStyles.paragraphs} 
        ${proseStyles.links}
        ${proseStyles.code}
        ${proseStyles.blockquotes}
        ${proseStyles.lists}
        ${proseStyles.images}
        ${proseStyles.tables}
        ${proseStyles.horizontalRules}
      `}
      data={data} 
    />
  )
}
