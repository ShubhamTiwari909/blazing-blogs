'use client'
import { Eye } from 'lucide-react'
import React, { useLayoutEffect, useState } from 'react'

const Views = ({ id }: { id: string }) => {
  const [views, setViews] = useState(0)
  useLayoutEffect(() => {
    const fetchViews = async () => {
      const views = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/views?id=${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        },
      )
      const data = await views.json()
      setViews(data.blogsCount)
    }
    if (id) {
      fetchViews()
    }
  }, [id])
  return (
    <div className="flex items-center gap-1">
      <Eye className="w-4 h-4" />
      <p>{views}</p>
    </div>
  )
}

export default Views
