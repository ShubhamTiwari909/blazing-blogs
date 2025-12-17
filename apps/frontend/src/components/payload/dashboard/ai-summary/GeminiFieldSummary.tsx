'use client'

import { toast, useDocumentInfo, useField } from '@payloadcms/ui'
import type { GeminiFieldSummaryProps } from './types'
import { convertToPlaintext } from '@/lib/utils'
import { geminiSummary } from './gemini-fetch'
import { useState } from 'react'

export default function GeminiFieldSummary({ path }: GeminiFieldSummaryProps) {
  const [loading, setLoading] = useState(false)
  const { setValue } = useField({ path })
  const documentInfo = useDocumentInfo()
  const handleSummary = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLoading(true)
    try {
      const summary = await geminiSummary({
        text: convertToPlaintext({ dataBlocks: documentInfo.data?.content.blocks }),
      })
      setValue(summary)
      toast.success('AI summary generated successfully')
    } catch (_error) {
      toast.error('Failed to generate AI summary')
      console.log(_error)
    } finally {
      setLoading(false)
    }
  }

  const isDisabled =
    !documentInfo.data?.content.blocks?.length ||
    documentInfo.data?.content.blocks?.length === 0 ||
    loading

  return (
    <div style={{ marginTop: '8px' }}>
      <button
        type="button"
        onClick={handleSummary}
        style={{
          padding: '8px 16px',
          backgroundColor: isDisabled ? 'gray' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        disabled={isDisabled}
      >
        {loading ? 'Generating...' : 'Generate AI Summary'}
      </button>
    </div>
  )
}
