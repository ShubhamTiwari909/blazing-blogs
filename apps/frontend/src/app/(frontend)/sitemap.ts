import { queryPagesSlug } from '@/lib/fetch-utils/query-all-pages'
import { SITE_URL } from '@/lib/constants'
import { connection } from 'next/server'

export default async function sitemap() {
  await connection()
  const pages = await queryPagesSlug({ page: 1, limit: 50000 })
  const staticPages = ['', 'about', 'contact', 'blogs', 'collaborators', 'subscribe', 'articles']

  const pagesUrls = [...pages, ...staticPages]

  return pagesUrls.map((page) => ({
    url: `${SITE_URL}/${page}`,
    lastModified: new Date(),
  }))
}
