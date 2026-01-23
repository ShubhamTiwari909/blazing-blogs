import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { searchParams, pathname } = new URL(request.url)
    if(pathname.includes('blogs/search')) {
        const search = searchParams.get('search')
        if (!search || typeof search !== 'string' || search.trim().length > 100) {
            return NextResponse.redirect(new URL('/blogs', request.url))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/blogs/search/:path*',
}