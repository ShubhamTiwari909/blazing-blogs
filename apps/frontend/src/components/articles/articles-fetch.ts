'use server'
import { cacheLife } from 'next/cache'

export const getDevToArticles = async ({ page, perPage }: { page: number; perPage: string }) => {
  'use cache'
  cacheLife({ stale: 60 * 5, revalidate: 60 * 60, expire: 60 * 60 * 24 })

  const apiKey = process.env.DEV_TO_API_KEY
  try {
    const response = await fetch(
      `https://dev.to/api/articles/me?page=${page}&per_page=${perPage}`,
      {
        method: 'GET',
        headers: {
          'api-key': apiKey || '',
        },
      },
    )

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
  } catch (error) {
    return {
      ok: false as const,
      status: 0,
      statusText: 'Network Error',
      details: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
