import { HealthCheck } from '@/components/healthcheck/HealthCheck'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
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

const healthcheckPage = async () => {
  return <HealthCheck />
}
export default healthcheckPage
