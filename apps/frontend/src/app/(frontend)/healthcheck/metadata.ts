import type { Metadata } from 'next'

export const METADATA: Metadata = {
  title: 'Health Check | Blazing Blogs',
  description: 'Monitor the status of our database and static pages',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/healthcheck',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/healthcheck',
    },
  },
  openGraph: {
    title: 'Health Check | Blazing Blogs',
    description: 'Monitor the status of our database and static pages',
    url: 'https://blazing-blogs-frontend.vercel.app/healthcheck',
  },
  twitter: {
    title: 'Health Check | Blazing Blogs',
    description: 'Monitor the status of our database and static pages',
  },
  robots: {
    index: true,
    follow: true,
  },
}
