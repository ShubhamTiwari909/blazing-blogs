'use client'

import { toast, useDocumentInfo } from '@payloadcms/ui'

export default function Revalidation() {
  const documentInfo = useDocumentInfo()
  const handleRevalidate = async (e: React.MouseEvent, slug: string) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      const response = await fetch('/api/revalidate', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      })

      const data = await response.json()

      if (data.revalidated) {
        toast.success('Revalidated successfully')
      }
    } catch (_error) {
      toast.error('Failed to revalidate')
      console.log(_error)
    }
  }

  return (
    <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
      <button
        type="button"
        onClick={(e) => handleRevalidate(e, documentInfo.data?.slug)}
        style={{
          padding: '8px 16px',
          backgroundColor: 'rebeccapurple',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Revalidate Page
      </button>
      <button
        type="button"
        onClick={(e) => handleRevalidate(e, 'blogs')}
        style={{
          padding: '8px 16px',
          backgroundColor: 'rebeccapurple',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Revalidate Blogs
      </button>
    </div>
  )
}
