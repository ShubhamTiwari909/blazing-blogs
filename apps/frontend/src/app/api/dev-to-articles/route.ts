import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'
    const perPage = searchParams.get('per_page') || '12'

    const apiKey = process.env.DEV_TO_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'DEV_TO_API_KEY is not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://dev.to/api/articles/me?page=${page}&per_page=${perPage}`,
      {
        method: 'GET',
        headers: {
          'api-key': apiKey,
        },
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        {
          error: `Failed to fetch blogs: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: 'Expected array of blogs, but received: ' + typeof data },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('Error fetching Dev.to articles:', err)
    return NextResponse.json(
      { error: 'Failed to fetch articles', details: (err as Error).message },
      { status: 500 }
    )
  }
}
