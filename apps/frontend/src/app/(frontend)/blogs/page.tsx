import Header from '@/components/blogs/blogs-list/Header'
import { METADATA } from './metadata'
import { Suspense } from 'react'
import BlogsListWrapper from '@/components/blogs/blogs-list/BlogsListWrapper'

export const metadata = METADATA

const page = async () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <Suspense><BlogsListWrapper /></Suspense>
      </div>
    </div>
  )
}

export default page
