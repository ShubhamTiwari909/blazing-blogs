'use client'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import React from 'react'

const BlogHeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div
      className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}
    >
      {children}
    </div>
  )
}

export default BlogHeaderWrapper
