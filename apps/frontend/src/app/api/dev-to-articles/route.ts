import { cacheLife } from 'next/cache'
import { NextResponse } from 'next/server'

const getDevToArticles = async ({
  apiKey,
  page,
  perPage,
}: {
  apiKey: string
  page: string
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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'
    const perPage = searchParams.get('per_page') || '12'

    const apiKey = process.env.DEV_TO_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'DEV_TO_API_KEY is not configured' }, { status: 500 })
    }

    const result = await getDevToArticles({ apiKey, page, perPage })

    if (!result.ok) {
      return NextResponse.json(
        {
          error: `Failed to fetch blogs: ${result.status} ${result.statusText}`,
          details: result.details,
        },
        { status: result.status },
      )
    }

    const data = result.data

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: 'Expected array of blogs, but received: ' + typeof data },
        { status: 500 },
      )
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('Error fetching Dev.to articles:', err)
    return NextResponse.json(
      { error: 'Failed to fetch articles', details: (err as Error).message },
      { status: 500 },
    )
  }
}
