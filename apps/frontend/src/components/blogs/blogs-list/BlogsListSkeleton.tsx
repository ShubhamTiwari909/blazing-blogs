import React from 'react'

const BlogCardSkeleton = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-14"></div>
        </div>

        {/* Metadata skeleton */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="space-y-1 flex-1">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-32"></div>
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-100">
          <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-24"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
        </div>
      </div>
    </article>
  )
}

const BlogsListSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full mb-6 animate-pulse">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>

        {/* Title skeleton */}
        <div className="space-y-3 mb-6">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto"></div>
        </div>

        {/* Description skeleton */}
        <div className="max-w-3xl mx-auto space-y-2">
          <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6 mx-auto"></div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default BlogsListSkeleton

