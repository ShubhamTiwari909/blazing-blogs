import { getPayload } from 'payload'
import config from '@payload-config'

export const queryPages = async ({ page, limit }: { page: number; limit: number }) => {
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
  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'users',
    depth: 1,
  })

  if (result.docs?.[0]) {
    return {
      type: 'user',
      docs: result.docs,
    }
  }
}