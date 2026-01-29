import BlogsSearchList from '@/components/blogs/search/BlogsSearchList'
import BlogsClientWrapper from '@/components/blogs/BlogsClientWrapper'
import AnimationBox from '@/components/ui/animations/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import { notFound } from 'next/navigation'
import { LuDock } from 'react-icons/lu'
import config from '@payload-config'
import { getPayload } from 'payload'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const SearchBlogs = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams
  const search = params.search

  const payload = await getPayload({ config })
  const blogs = await payload.find({
    collection: 'pages',
    limit: 50,
    where: {
      or: [
        {
          'content.title': {
            contains: search,
          },
        },
        {
          'content.shortDescription': {
            contains: search,
          },
        },
      ],
    },
    select: {
      analytics: false,
    },
  })

  if (!blogs.docs) {
    return notFound()
  }
  const blogsList = {
    type: 'page',
    docs: blogs.docs,
    totalDocs: blogs.totalDocs,
    hasNextPage: blogs.hasNextPage,
  }
  return (
    <BlogsClientWrapper>
      <div className="min-h-screen py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimationBox className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              <LuDock className="h-4 w-4" />
              {blogs.totalDocs} Blogs
            </AnimationBox>
          </div>
          {blogs.totalDocs > 0 ? (
            <AnimationBox className="mb-10">
              <Typography
                as="h1"
                variant="h1"
                size="xl"
                weight="bold"
                className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-center text-transparent"
              >
                Search Results for: {search?.slice(0, 50)}
                {search?.length && search?.length > 50 ? '...' : ''}
              </Typography>
            </AnimationBox>
          ) : null}
          {blogs.docs && blogs.docs.length > 0 ? (
            <BlogsSearchList pages={blogsList} search={search as string} />
          ) : (
            <div className="flex flex-col items-center py-12">
              <Typography as="p" size="3xl" color="inherit" className="text-gray-500">
                No blogs found
              </Typography>
              <Typography as="p" size="xl" color="inherit" className="mt-2 text-gray-400">
                Check back later for new content!
              </Typography>
            </div>
          )}
        </div>
      </div>
    </BlogsClientWrapper>
  )
}

export default SearchBlogs
