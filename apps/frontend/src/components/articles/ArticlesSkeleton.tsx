import React from 'react'

const ArticlesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="group flex h-full transform flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="h-48 w-full animate-pulse bg-gray-200"></div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex items-center">
              <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesSkeleton
