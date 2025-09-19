import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4">
      {/* Main loading container */}
      <div className="flex flex-col items-center space-y-8 max-w-md w-full">
        {/* Animated logo/brand */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <div className="w-8 h-8 bg-white rounded-lg animate-bounce"></div>
          </div>
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75 delay-300"></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 animate-pulse">
            Loading Blog
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Preparing your reading experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Skeleton content preview */}
        <div className="w-full space-y-4 opacity-50">
          <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded animate-pulse"></div>
          <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-3/4 animate-pulse delay-100"></div>
          <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/2 animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default loading
