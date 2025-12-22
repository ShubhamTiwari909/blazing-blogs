import { pageData } from "./fetch-utils"
import { queryPages } from "./query-all-pages"
import { unstable_cache } from "next/cache"
import { Params } from "./types"

// Create cached versions of data fetching functions
export const getCachedPageData = unstable_cache(
  async () => {
    return await queryPages({ page: 1, limit: 50 })
  },
  ['blogs-list'],
  {
    revalidate: 86400, // 24 hours
    tags: ['blogs-list'],
  },
)

// Helper function to create a cached version with unique key per page
export const getCachedBlogData = async (params: Params) => {
  const { blogs = 'home' } = params
  const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs
  const cacheKey = `page-data-${parsedSlug}`

  const cachedFn = unstable_cache(
    async () => {
      return await pageData(params)
    },
    [cacheKey],
    {
      revalidate: 86400, // 24 hours
      tags: [`page-data-${parsedSlug}`],
    },
  )

  return cachedFn()
}