import Hero from '@/components/home/Hero'
import type { Metadata } from 'next'
import React from 'react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blazing Blogs',
  description: 'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app',
    },
  },
  openGraph: {
    title: 'Blazing Blogs',
    description: 'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
    url: 'https://blazing-blogs-frontend.vercel.app',
  },
  twitter: {
    title: 'Blazing Blogs',
    description: 'A passionate engineer and storyteller sharing insights on technology, creativity, and the journey of building meaningful digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function HomePage() {
  return <Hero />
}
