import type { QueryPagesSlugProps } from './types'
import { cacheLife } from 'next/cache'
import config from '@payload-config'
import { getPayload } from 'payload'

export const queryPagesSlug = async ({ page, limit }: QueryPagesSlugProps) => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'pages',
    depth: 2,
    pagination: true,
    limit,
    page,
    where: {
      slug: {
        contains: 'blogs',
      },
    },
    select: {
      slug: true,
    },
  })

  return result.docs.map((page) => page.slug)
}

export const queryPages = async ({ page, limit }: QueryPagesSlugProps) => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'pages',
    depth: 2,
    pagination: true,
    limit,
    page,
    where: {
      slug: {
        contains: `blogs`,
      },
    },
    select: {
      id: true,
      slug: true,
      content: true,
      createdAt: true,
    },
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs,
      totalDocs: result.totalDocs,
      hasNextPage: result.hasNextPage,
    }
  }
}

export const queryCollaborators = async () => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'collaborators',
    depth: 1,
  })

  if (result.docs?.[0]) {
    return {
      type: 'collaborator',
      docs: result.docs,
    }
  }
}

export const queryGlobals = async () => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60 * 24, expire: 60 * 60 * 24 * 7 })

  const payload = await getPayload({ config: config })

  const result = await payload.findGlobal({
    slug: 'dev-to-blogs',
  })

  return result
}
