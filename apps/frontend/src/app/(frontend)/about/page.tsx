import React from 'react'
import Intro from '@/components/about/Intro'
import MyStory from '@/components/about/MyStory'
import Skills from '@/components/about/Skills'
import Achievment from '@/components/about/Achievment'
import Values from '@/components/about/Values'
import CallToAction from '@/components/about/CallToAction'
import BackgroundDecoration from '@/components/ui/BackgroundDecoration'

export const dynamic = 'force-static'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Intro />
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <MyStory />
            <Skills />
          </div>
          <Achievment />
          <Values />
          <CallToAction />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
