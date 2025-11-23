'use client'
import { useDocumentInfo, useField, useForm } from '@payloadcms/ui'
import React, { useState } from 'react'
import './style.scss'
import type { GetViewsAndReactionsProps, ViewsAndReactionsProps } from './types'

const getViewsAndReactions = async ({ id }: GetViewsAndReactionsProps) => {
  const viewsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/views?id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const reactionsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/reactions-count-from-blog?id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const blogReactions = await reactionsResponse.json()
  const blogViews = await viewsResponse.json()

  return {
    views: blogViews.blogsCount,
    reactions: blogReactions.reactionsCount,
  }
}

export default function ViewsAndReactions({ path }: ViewsAndReactionsProps) {
  const [loading, setLoading] = useState(false)
  const formFields = useForm()
  const documentInfo = useDocumentInfo()

  const reactions = useField<string>({ path: 'analytics.reactions' })
  const views = useField<string>({ path: 'analytics.views' })

  const { setValue } = useField({ path })

  const handleGetViewsAndReactions = () => {
    setLoading(true)
    const documentId = documentInfo?.data?.id
    getViewsAndReactions({ id: documentId as string })
      .then((data) => {
        setValue('UI Render')
        formFields.dispatchFields({
          type: 'UPDATE',
          path: 'analytics.reactions',
          value: data.reactions,
        })
        formFields.dispatchFields({
          type: 'UPDATE',
          path: 'analytics.views',
          value: data.views,
        })
      })
      .catch((error) => {
        console.error('Failed to fetch views and reactions:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="views-reactions-container">
      <div className="card-wrapper">
        <div className="analytics-card">
          <div className="card-header">
            <h1>Views and Reactions</h1>
          </div>
          <div className="card-body">
            <button
              className="action-button"
              disabled={loading}
              onClick={handleGetViewsAndReactions}
            >
              {loading ? '🔄 Getting Views and Reactions...' : '🔄 Get Views and Reactions'}
            </button>
            <div className="stats-container">
              <div className="stat-item views-stat">
                <span className="stat-label">👁️ Views</span>
                <span className="stat-value">{views.value || '0'}</span>
              </div>
              <div className="stat-item reactions-stat">
                <span className="stat-label">❤️ Reactions</span>
                <span className="stat-value">{reactions.value || '0'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
