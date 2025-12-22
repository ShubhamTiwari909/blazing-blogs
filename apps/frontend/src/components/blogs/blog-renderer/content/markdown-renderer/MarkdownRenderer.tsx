import { RichText } from '@payloadcms/richtext-lexical/react'
import type { MarkdownRendererProps } from '../types'
import { proseStyles } from './styles'
import React from 'react'

export const MarkdownRenderer = ({ data }: MarkdownRendererProps) => {
  return (
    <RichText
      className={`prose prose-lg prose-slate max-w-none wrap-break-word ${proseStyles.headings} ${proseStyles.paragraphs} ${proseStyles.links} ${proseStyles.code} ${proseStyles.blockquotes} ${proseStyles.lists} ${proseStyles.images} ${proseStyles.tables} ${proseStyles.horizontalRules} `}
      data={data}
    />
  )
}
