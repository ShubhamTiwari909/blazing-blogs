import { NextRequest, NextResponse } from 'next/server'

const CORS_ALLOWED_ORIGINS = [
  'https://blazing-blogs-backend.vercel.app',
  'https://script.google.com',
] as const

const CORS_ALLOWED_METHODS = 'GET,DELETE,PATCH,POST,PUT'
const CORS_ALLOWED_HEADERS =
  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'

function buildCorsHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': CORS_ALLOWED_METHODS,
    'Access-Control-Allow-Headers': CORS_ALLOWED_HEADERS,
  }
}

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { searchParams, pathname } = new URL(request.url)
  if (pathname.includes('blogs/search')) {
    const search = searchParams.get('search')
    if (!search || typeof search !== 'string' || search.trim().length > 100) {
      return NextResponse.redirect(new URL('/blogs', request.url))
    }
  }
  const requestOrigin = request.headers.get('origin')
  const corsHeaders: Record<string, string> =
    requestOrigin && CORS_ALLOWED_ORIGINS.includes(requestOrigin as (typeof CORS_ALLOWED_ORIGINS)[number])
      ? buildCorsHeaders(requestOrigin)
      : {}

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        'Access-Control-Max-Age': '86400',
      },
    })
  }

  const response = NextResponse.next()
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}

export const config = {
  matcher: '/blogs/search/:path*',
}
