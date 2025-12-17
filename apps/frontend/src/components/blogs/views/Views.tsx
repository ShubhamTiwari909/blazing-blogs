import {
  updateBlogViews,
  checkIfAlreadyViewed,
  getBlogView,
} from '@/lib/fetch-utils/fetch-blog-views'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import type { ViewsProps } from './types'
import { Eye } from 'lucide-react'

const Views = ({ id }: ViewsProps) => {
  const [cookies, setCookies] = useCookies()
  const [blogViews, setBlogViews] = useState(0)

  useEffect(() => {
    if (checkIfAlreadyViewed({ id, cookies })) {
      getBlogView({ id }).then((data) => {
        setBlogViews(data.blogsCount)
      })
      return
    }
    updateBlogViews({ id }).then((data) => {
      setBlogViews(data.blogsCount)
      setCookies(`viewed-${id}`, 'true', {
        maxAge: 86400, // 24 hours in seconds
        path: '/', // Set path to root so it's accessible everywhere
        sameSite: 'strict',
      })
    })
  }, [id, cookies, setCookies])
  return (
    <div className="flex items-center gap-1">
      <Eye className="h-4 w-4" />
      <p>{blogViews}</p>
    </div>
  )
}

export default Views
