import React from 'react'

const BackgroundDecoration = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-blue-800 dark:mix-blend-screen"></div>
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-200 opacity-20 mix-blend-multiply blur-3xl filter delay-1000 dark:bg-purple-800 dark:mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl filter delay-500 dark:bg-indigo-800 dark:mix-blend-screen"></div>
    </div>
  )
}

export default BackgroundDecoration
