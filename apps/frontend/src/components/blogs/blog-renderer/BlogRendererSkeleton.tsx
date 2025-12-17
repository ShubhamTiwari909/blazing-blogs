import React from 'react'

const BlogRendererSkeleton = () => {
  return (
    <>
      {/* Header Strip Skeleton */}
      <div className="sticky top-16.25 z-50 mx-auto max-w-5xl rounded-br-2xl rounded-bl-2xl border-b border-gray-200 bg-white shadow-sm">
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Back button skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
          </div>
          {/* Right side actions skeleton */}
          <div className="flex items-center gap-5">
            <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
      </div>

      <div>
        {/* Blog Header Skeleton */}
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Blog Image Skeleton */}
          <div className="mb-8 h-64 w-full animate-pulse rounded-2xl bg-gray-200 md:h-96"></div>

          {/* Title Skeleton */}
          <div className="mb-6 space-y-3">
            <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 md:h-14"></div>
            <div className="h-10 w-5/6 animate-pulse rounded-lg bg-gray-200 md:h-14"></div>
          </div>

          {/* Description Skeleton */}
          <div className="mb-8 space-y-2">
            <div className="h-5 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </div>

          {/* Metadata Skeleton */}
          <div className="space-y-10 border-b border-gray-200 pb-8">
            {/* Author, Date, Tags */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Author skeleton */}
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
              </div>
              {/* Date skeleton */}
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
              </div>
              {/* Tags skeleton */}
              <div className="flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
                <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200"></div>
                <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Views, Reactions, Reading Time, AI Analysis */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left side - Views and Reactions */}
              <div className="flex items-center gap-4">
                <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200"></div>
              </div>
              {/* Right side - Reading time and AI Analysis */}
              <div className="flex items-center gap-4">
                <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-8 w-28 animate-pulse rounded-lg bg-gray-200"></div>
              </div>
            </div>
          </div>

          {/* Share button skeleton */}
          <div className="mt-2 flex justify-end">
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>

        {/* Blog Content Skeleton */}
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-10 shadow-sm lg:p-8">
            {/* Content blocks skeleton */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Paragraph skeleton */}
                <div className="mb-6 space-y-3">
                  <div className="h-4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                </div>

                {/* Sometimes show heading or code block skeleton */}
                {index % 3 === 0 && (
                  <div className="mb-4 h-8 w-2/3 animate-pulse rounded-lg bg-gray-200"></div>
                )}
                {index % 4 === 0 && (
                  <div className="mb-4 rounded-lg bg-gray-900 p-4">
                    <div className="space-y-2">
                      <div className="h-4 animate-pulse rounded bg-gray-700"></div>
                      <div className="h-4 w-4/5 animate-pulse rounded bg-gray-700"></div>
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700"></div>
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
