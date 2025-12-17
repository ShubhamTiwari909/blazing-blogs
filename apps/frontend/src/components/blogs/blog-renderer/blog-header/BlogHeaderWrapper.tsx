'use client'
import type { BlogHeaderWrapperProps } from '@/components/blogs/blog-renderer/types'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import React from 'react'

const BlogHeaderWrapper = ({ children }: BlogHeaderWrapperProps) => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div
      className={`mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}
    >
      {children}
    </div>
  )
}

export default BlogHeaderWrapper
