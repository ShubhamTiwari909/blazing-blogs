import { queryGlobals, queryPages } from './query-all-pages'
import { cacheLife } from 'next/cache'
import { pageData } from './fetch-utils'
import { Params } from './types'

export const getCachedPageData = async () => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  return await queryPages({ page: 1, limit: 50 })
}

export const getCachedBlogData = async (params: Params) => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  return await pageData(params)
}

export const getCachedGlobalData = async () => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  return await queryGlobals()
}
