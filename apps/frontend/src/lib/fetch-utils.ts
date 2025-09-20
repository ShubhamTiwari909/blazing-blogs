import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { cache } from 'react'
import config from '@payload-config'
import { Props } from './types'

export const fetchBlogView = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/views?id=${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    },
  )
  const data = await response.json()
  return data
}

export const pageData = async (paramsPromise: Props['params']) => {
  const { blogs = 'home' } = await paramsPromise

  const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs

  const page = await queryPageBySlug({
    slug: parsedSlug,
  })
  if (!page) {
    return notFound()
  }

  return page
}

export const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
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
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs[0],
    }
  }
})

export const queryPages = cache(async () => {
  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'pages',
    depth: 2,
    pagination: false,
    where: {
      slug: {
        contains: `blogs`,
      },
    },
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs,
    }
  }
})
