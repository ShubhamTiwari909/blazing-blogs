import { contructImageUrl } from '@/lib/utils'
import { Page } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CalendarDays, User, Tag } from 'lucide-react'

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

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.docs.map((page) => (
          <article
            key={page.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
          >
            {/* Image */}
            {page.image && typeof page.image === 'object' && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={contructImageUrl(page.image._key as string)}
                  alt={page.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                <Link href={`/blogs/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {page.shortDescription}
              </p>

              {/* Tags */}
              {page.tags && page.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {page.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.tag}
                    </span>
                  ))}
                  {page.tags.length > 3 && (
                    <span className="text-xs text-gray-500">+{page.tags.length - 3} more</span>
                  )}
                </div>
              )}

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  {page.author && (
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="truncate">{page.author}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <time dateTime={page.createdAt}>
                      {new Date(page.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-6">
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span>Read Article</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogsList
