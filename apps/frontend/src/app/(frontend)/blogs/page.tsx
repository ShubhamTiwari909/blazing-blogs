import BlogsWrapper from '@/components/blogs/blogs-list/BlogsListWrapper'
import BlogsClientWrapper from '@/components/blogs/BlogsClientWrapper'
import Header from '@/components/blogs/blogs-list/Header'
import { METADATA } from './metadata'
import BlogsListSkeleton from '@/components/blogs/blogs-list/BlogsListSkeleton'
import { Suspense } from 'react'

export const metadata = METADATA

const page = async () => {
  return (
    <BlogsClientWrapper>
      <div className="min-h-screen py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
          <Suspense fallback={<BlogsListSkeleton />}>
            <BlogsWrapper />
          </Suspense>
        </div>
      </div>
    </BlogsClientWrapper>
  )
}

export default page
