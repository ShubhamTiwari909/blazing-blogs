import Link from 'next/link'
import React from 'react'

const ReadMore = ({ slug }: { slug: string }) => {
  return (
     <Link
    href={`/${slug}`}
    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group"
  >
    <span>Read Article</span>
    <svg
      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
  )
}

export default ReadMore
