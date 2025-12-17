import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

const staticPages = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about',
    name: 'About',
  },
  {
    url: '/contact',
    name: 'Contact',
  },
  {
    url: '/blogs',
    name: 'Blogs',
  },
  {
    url: '/sitemap.xml',
    name: 'Sitemap',
  },
  {
    url: '/collaborators',
    name: 'Collaborators',
  },
]

export async function GET(): Promise<NextResponse> {
  try {
    const payload = await getPayload({ config: configPromise })

    const response: {
      database: {
        pages: { total?: number; status: string; error?: string; slugs?: string }
        media: { total?: number; status: string; error?: string }
        users: { total?: number; status: string; error?: string }
      }
      static: {
        url: string
        name: string
        status: string
        message: string
      }[]
    } = {
      database: {
        pages: { status: 'ERROR' },
        media: { status: 'ERROR' },
        users: { status: 'ERROR' },
      },
      static: [],
    }

    try {
      const pages = await payload.find({
        collection: 'pages',
        pagination: false,
        select: {
          id: true,
          slug: true,
        },
      })
      response.database.pages = {
        total: pages.totalDocs,
        status: 'OK',
        slugs: pages.docs.map((page) => `${page.slug}`).join(', '),
      }
    } catch (error) {
      console.error('Error checking pages:', error)
      response.database.pages = {
        status: 'ERROR',
        error: (error as Error).message,
      }
    }

    try {
      const media = await payload.find({
        collection: 'media',
        pagination: false,
        select: {
          id: true,
          filename: true,
        },
      })
      response.database.media = {
        total: media.totalDocs,
        status: 'OK',
      }
    } catch (error) {
      console.error('Error checking media:', error)
      response.database.media = {
        status: 'ERROR',
        error: (error as Error).message,
      }
    }

    try {
      const users = await payload.find({
        collection: 'users',
        pagination: false,
        select: {
          email: true,
        },
      })
      response.database.users = {
        total: users.totalDocs,
        status: 'OK',
      }
    } catch (error) {
      console.error('Error checking users:', error)
      response.database.users = {
        status: 'ERROR',
        error: (error as Error).message,
      }
    }

    const checkStaticPages = staticPages.map(async (page) => {
      const url = `${process.env.SITE_URL}${page.url}`
      try {
        const fetchResponse = await fetch(url)
        return {
          url,
          name: page.name,
          status: fetchResponse.ok ? 'OK' : 'ERROR',
          message: fetchResponse.ok ? 'Page found' : 'Page not found',
        }
      } catch (error) {
        console.error(`Error checking static page ${page}:`, error)
        return {
          url,
          name: page.name,
          status: 'ERROR',
          message: (error as Error).message,
        }
      }
    })
    response.static = await Promise.all(checkStaticPages)

    const hasDatabaseErrors = Object.values(response.database).some(
      (item) => item.status === 'ERROR',
    )
    const hasStaticErrors = response.static.some((item) => item.status === 'ERROR')
    const hasErrors = hasDatabaseErrors || hasStaticErrors
    const statusCode = hasErrors ? 500 : 200

    return NextResponse.json(response, { status: statusCode })
  } catch (error) {
    console.error('Error initializing payload:', error)
    return NextResponse.json(
      {
        status: 'ERROR',
        message: (error as Error).message,
        database: {
          pages: { status: 'ERROR', error: 'Payload initialization failed' },
          media: { status: 'ERROR', error: 'Payload initialization failed' },
          users: { status: 'ERROR', error: 'Payload initialization failed' },
        },
        static: [],
      },
      { status: 500 },
    )
  }
}
