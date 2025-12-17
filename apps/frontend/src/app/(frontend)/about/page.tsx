import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import PortfolioIframe from '@/components/about/PortfolioIframe'
import CallToAction from '@/components/about/CallToAction'
import Achievment from '@/components/about/Achievment'
import MyStory from '@/components/about/MyStory'
import Values from '@/components/about/Values'
import Skills from '@/components/about/Skills'
import Intro from '@/components/about/Intro'
import type { Metadata } from 'next'
import React from 'react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About Me | Blazing Blogs',
  description:
    'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/about',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/about',
    },
  },
  openGraph: {
    title: 'About Me | Blazing Blogs',
    description:
      'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
    url: 'https://blazing-blogs-frontend.vercel.app/about',
  },
  twitter: {
    title: 'About Me | Blazing Blogs',
    description:
      'Passionate full-stack developer crafting digital experiences that make a difference. I believe in the power of code to solve real-world problems and create meaningful connections.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <Intro />
          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <MyStory />
            <Skills />
          </div>
          <Achievment />
          <Values />
          <PortfolioIframe />
          <CallToAction />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
