'use client'
import DynamicBackground from '@/components/ui/DynamicBackground'
import PortfolioIframe from '@/components/about/PortfolioIframe'
import ExpertisePreview from './ExpertisePreview'
import FeaturedTopics from './FeaturedTopics'
import TextAnimation from './TextAnimation'
import SocialLinks from './SocialLinks'
import dynamic from 'next/dynamic'
import Stats from './Stats'
import React from 'react'
import Cta from './Cta'

const Confetti = dynamic(() => import('./Confetti'), { ssr: false })

const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-12 lg:py-20">
      <DynamicBackground />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in-up mb-8">
            <span className="border-border bg-card/50 text-muted-foreground hover:bg-card/80 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-colors">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Welcome to my digital space
            </span>
          </div>

          <h1 className="text-foreground mb-8 text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl lg:text-8xl">
            <TextAnimation tag="span" className="mb-2 block">
              Hello, I&apos;m
            </TextAnimation>
            <TextAnimation
              tag="span"
              className="from-primary to-secondary block bg-gradient-to-r via-purple-500 bg-clip-text pb-2 text-transparent"
            >
              Shubham
            </TextAnimation>
          </h1>

          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
            A passionate engineer and storyteller sharing insights on technology, creativity, and
            the journey of building meaningful digital experiences.
          </p>

          <Cta />
        </div>

        <Stats />

        <FeaturedTopics />

        <ExpertisePreview />

        <h2 className="text-foreground mt-20 mb-8 text-center text-2xl font-bold md:text-3xl">
          My Portfolio
        </h2>

        <PortfolioIframe />

        <SocialLinks />
      </div>
      <Confetti />
    </section>
  )
}

export default Hero
