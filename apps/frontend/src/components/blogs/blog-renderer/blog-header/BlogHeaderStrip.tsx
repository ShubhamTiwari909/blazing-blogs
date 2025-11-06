import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CopyLink from '../CopyLink'
import DarkModeToggle from './DarkModeToggle'

const BlogHeaderStrip = () => {
  return (
    <div className="bg-white border-b border-gray-200 max-w-5xl mx-auto rounded-br-2xl rounded-bl-2xl sticky top-16.25 z-50 shadow-sm">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
