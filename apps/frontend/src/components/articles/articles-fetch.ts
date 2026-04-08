'use server'
import { cacheLife } from 'next/cache'

export const getDevToArticles = async ({
  apiKey,
  page,
  perPage,
}: {
  apiKey: string
  page: number
  perPage: string
}) => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60, expire: 60 * 60 * 24 })

  const response = await fetch(`https://dev.to/api/articles/me?page=${page}&per_page=${perPage}`, {
    method: 'GET',
    headers: {
      'api-key': apiKey,
    },
  })

  if (!response.ok) {
    return {
      ok: false as const,
      status: response.status,
      statusText: response.statusText,
      details: await response.text(),
    }
  }

  return {
    ok: true as const,
    data: await response.json(),
  }
} 