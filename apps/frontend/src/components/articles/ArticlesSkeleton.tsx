import React from 'react'

const ArticlesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="group bg-white h-full dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="h-48 w-full animate-pulse bg-gray-200"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ArticlesSkeleton