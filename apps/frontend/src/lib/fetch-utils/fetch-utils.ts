import type { Params, QueryPageBySlugProps } from './types'
import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayload } from 'payload'

export const pageData = async (paramsPromise: Params, options: { draft?: boolean } = {}) => {
  const { blogs = 'home' } = paramsPromise

  const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs

  const page = await queryPageBySlug({
    slug: parsedSlug,
    draft: options.draft,
  })
  if (!page) {
    return notFound()
  }

  return page
}

export const queryPageBySlug = async ({ slug, draft = false }: QueryPageBySlugProps) => {
  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    draft,
    overrideAccess: draft,
    depth: 2,
    pagination: false,
    where: {
      slug: {
        equals: `blogs/${slug}`,
      },
    },
    select: {
      analytics: false,
    },
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs[0],
    }
  } else {
    return {
      type: 'page',
      docs: null,
    }
  }
}
