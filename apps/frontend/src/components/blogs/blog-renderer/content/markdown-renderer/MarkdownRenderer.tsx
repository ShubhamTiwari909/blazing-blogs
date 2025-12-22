import type { MarkdownRendererProps } from '../types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'
import { proseStyles } from './styles'

export const MarkdownRenderer = ({ data }: MarkdownRendererProps) => {
  return (
    <RichText
      className={`prose prose-lg prose-slate max-w-none wrap-break-word ${proseStyles.headings} ${proseStyles.paragraphs} ${proseStyles.links} ${proseStyles.code} ${proseStyles.blockquotes} ${proseStyles.lists} ${proseStyles.images} ${proseStyles.tables} ${proseStyles.horizontalRules} `}
      data={data}
    />
  )
}
