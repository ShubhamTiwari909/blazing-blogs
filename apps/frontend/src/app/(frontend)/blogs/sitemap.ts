import { SITE_URL } from '@/lib/constants'
import { queryPagesSlug } from '@/lib/fetch-utils/query-all-pages'

export default async function sitemap() {
  const pages = await queryPagesSlug({ page: 1, limit: 50000 })

  return pages.map((page) => ({
    url: `${SITE_URL}/${page}`,
    lastModified: new Date(),
  }))
}
