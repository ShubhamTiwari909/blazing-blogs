import { calculateReadingTime } from '@/lib/utils'
import React from 'react'

import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import { Page } from '@/payload-types'

const EstimateReading = ({ data }: { data: Page['content'] }) => {
  const blocks = data.blocks
  const text = blocks
    .map((block) => {
      if (block.blockType === 'content' && block.content) {
        return convertLexicalToPlaintext({ data: block.content })
      } else if (block.blockType === 'codeBlock' && block.codeBlock) {
        return block.codeBlock
      }
    })
    .join(' ')
  const readingTime = calculateReadingTime(text)
  return <p className="text-base text-gray-500">{readingTime}</p>
}

export default EstimateReading
