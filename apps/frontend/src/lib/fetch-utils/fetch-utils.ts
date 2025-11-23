import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { cache } from 'react'
import config from '@payload-config'
import type { Params, SlugProps } from './types'

export const pageData = async (paramsPromise: Params) => {
  const { blogs = 'home' } = paramsPromise

  const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs

  const page = await queryPageBySlug({
    slug: parsedSlug,
  })
  if (!page) {
    return notFound()
  }

  return page
}

export const queryPageBySlug = cache(async ({ slug }: SlugProps) => {
  const payload = await getPayload({ config: config })
  const { isEnabled: draft } = await draftMode()

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
  }
})
