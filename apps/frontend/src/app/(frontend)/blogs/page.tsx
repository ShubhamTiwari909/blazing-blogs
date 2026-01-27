import { getCachedPageData } from '@/lib/fetch-utils/fetch-blogs'
import BlogsList from '@/components/blogs/blogs-list/BlogsList'
import { Typography } from '@/components/atoms/typography'
import Header from '@/components/blogs/blogs-list/Header'
import { METADATA } from './metadata'

export const metadata = METADATA

const page = async () => {
  const pages = await getCachedPageData()
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header totalDocs={pages?.totalDocs || 0} />
        {pages && pages.docs.length > 0 ? (
          <BlogsList pages={pages} />
        ) : (
          <div className="py-12 text-center">
            <Typography as="p" size="base" color="inherit" className="text-gray-500">
              No blogs found
            </Typography>
            <Typography as="p" size="base" color="inherit" className="mt-2 text-gray-400">
              Check back later for new content!
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
