import React from 'react'

const CollaboratorSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border border-gray-100 bg-white shadow-lg"
            >
              <div className="h-48 w-full bg-gray-200"></div>
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                  <div className="h-6 w-1/2 rounded bg-gray-200"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 rounded bg-gray-200"></div>
                  <div className="h-4 rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-gray-200"></div>
                  <div className="h-6 w-20 rounded-full bg-gray-200"></div>
                  <div className="h-6 w-14 rounded-full bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 w-24 rounded bg-gray-200"></div>
                    <div className="h-3 w-32 rounded bg-gray-200"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
                  <div className="h-8 w-24 rounded-lg bg-gray-200"></div>
                  <div className="h-6 w-20 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollaboratorSkeleton
