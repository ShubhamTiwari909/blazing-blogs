'use client'
import React, { useEffect, useState } from 'react'
import AiRenderer from './AiRenderer'
import { convertToPlaintext } from '@/lib/utils'
import { Page } from '@/payload-types'
import { useCookies } from 'react-cookie'

const AiAnalysis = ({
  disabled,
  blocks,
}: {
  disabled?: boolean
  blocks: Page['content']['blocks']
}) => {
  const [loading, setLoading] = useState(false)
  const [aiDescription, setAiDescription] = useState('')
  const [cookies, setCookies] = useCookies(['aiSummary'])

  useEffect(() => {
    const handleAiAnalysis = async () => {
      const text = convertToPlaintext({ dataBlocks: blocks })
      setLoading(true)
      try {
        const csrf = await fetch('/api/csrf')
        const token = await csrf.json()
        const handleAiSummary = await fetch('/api/gemini-model', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ csrfToken: token.csrfToken, text }),
        })
        const result = await handleAiSummary.json()
        setAiDescription(result.summary || 'No AI analysis available')
        setCookies('aiSummary', result.summary || 'No AI analysis available', { maxAge: 3600 })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching AI analysis:', error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    const cachedSummary = cookies.aiSummary
    console.log(cachedSummary)
    if (cachedSummary) {
      setAiDescription(cachedSummary)
      return
    }
    handleAiAnalysis()
  }, [blocks, cookies, setCookies])
  if (loading) return <div className="flex items-center gap-1">AI Summary Loading...</div>

  return (
    <div className="flex flex-wrap items-center gap-5">
      <AiRenderer isDisabled={disabled} aiDescription={aiDescription} />
    </div>
  )
}

export default AiAnalysis
