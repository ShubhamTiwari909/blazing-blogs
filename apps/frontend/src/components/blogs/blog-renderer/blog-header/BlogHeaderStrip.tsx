'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CopyLink from '../CopyLink'
import DarkModeToggle from './DarkModeToggle'
import { useDarkModeStore } from '@/lib/store/useDarkMode'

const BlogHeaderStrip = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div className={`border-b border-gray-200 max-w-5xl mx-auto rounded-br-2xl rounded-bl-2xl sticky top-16.25 z-50 shadow-sm ${darkMode ? 'bg-slate-900 text-gray-50' : 'bg-white text-gray-900'}`}>
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/blogs"
          className="inline-flex items-center transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
        <div className="flex items-center flex-wrap gap-5">
          <CopyLink />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default BlogHeaderStrip
