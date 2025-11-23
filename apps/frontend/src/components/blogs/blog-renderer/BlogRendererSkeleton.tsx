import React from 'react'

const BlogRendererSkeleton = () => {
  return (
    <>
      {/* Header Strip Skeleton */}
      <div className="bg-white border-b border-gray-200 max-w-5xl mx-auto rounded-br-2xl rounded-bl-2xl sticky top-16.25 z-50 shadow-sm">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Back button skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </div>
          {/* Right side actions skeleton */}
          <div className="flex items-center gap-5">
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div>
        {/* Blog Header Skeleton */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Blog Image Skeleton */}
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl mb-8 animate-pulse"></div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-10 md:h-14 bg-gray-200 rounded-lg animate-pulse w-full"></div>
            <div className="h-10 md:h-14 bg-gray-200 rounded-lg animate-pulse w-5/6"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2 mb-8">
            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded animate-pulse w-4/5"></div>
            <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>

          {/* Metadata Skeleton */}
          <div className="space-y-10 pb-8 border-b border-gray-200">
            {/* Author, Date, Tags */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Author skeleton */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
              {/* Date skeleton */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
              {/* Tags skeleton */}
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full w-14 animate-pulse"></div>
              </div>
            </div>

            {/* Views, Reactions, Reading Time, AI Analysis */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Left side - Views and Reactions */}
              <div className="flex items-center gap-4">
                <div className="h-8 bg-gray-200 rounded-lg w-20 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-20 animate-pulse"></div>
              </div>
              {/* Right side - Reading time and AI Analysis */}
              <div className="flex items-center gap-4">
                <div className="h-8 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-28 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Share button skeleton */}
          <div className="flex justify-end mt-2">
            <div className="h-10 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
          </div>
        </div>

        {/* Blog Content Skeleton */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-10 lg:p-8">
            {/* Content blocks skeleton */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Paragraph skeleton */}
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>

                {/* Sometimes show heading or code block skeleton */}
                {index % 3 === 0 && (
                  <div className="h-8 bg-gray-200 rounded-lg mb-4 w-2/3 animate-pulse"></div>
                )}
                {index % 4 === 0 && (
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogRendererSkeleton
