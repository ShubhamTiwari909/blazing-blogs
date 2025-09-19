import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>
    </div>
  )
}

export default BackButton
