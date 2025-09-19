import { Page } from '@/payload-types'
import React from 'react'
import BlogCard from './BlogCard'

type Props =
  | {
      type: string
      docs: Page[]
    }
  | undefined

const BlogsList = ({ pages }: { pages: Props }) => {
  if (!pages?.docs?.length) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No blogs found</div>
        <p className="text-gray-400 mt-2">Check back later for new content!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insights, tutorials, and stories from our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.docs.map((page) => (
          <BlogCard key={page.id} page={page} />
        ))}
      </div>
    </div>
  )
}

export default BlogsList
