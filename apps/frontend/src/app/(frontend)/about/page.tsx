import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import PortfolioIframe from '@/components/about/PortfolioIframe'
import CallToAction from '@/components/about/CallToAction'
import Achievment from '@/components/about/Achievment'
import MyStory from '@/components/about/MyStory'
import Values from '@/components/about/Values'
import Skills from '@/components/about/Skills'
import Intro from '@/components/about/Intro'
import { METADATA } from './metadata'
import React from 'react'

export const dynamic = 'force-static'

export const metadata = METADATA

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
