'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import TextAnimation from './TextAnimation'
import DynamicBackground from './DynamicBackground'
import Cta from './Cta'
import Stats from './Stats'
import FeaturedTopics from './FeaturedTopics'
import ExpertisePreview from './ExpertisePreview'
import SocialLinks from './SocialLinks'
import PortfolioIframe from '../about/PortfolioIframe'

const Confetti = dynamic(() => import('./Confetti'), { ssr: false })

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background py-12 lg:py-20">
      <DynamicBackground />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-medium text-muted-foreground shadow-sm hover:bg-card/80 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Welcome to my digital space
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            <TextAnimation tag="span" className="block mb-2">
              Hello, I&apos;m
            </TextAnimation>
            <TextAnimation
              tag="span"
              className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent pb-2"
            >
              Shubham
            </TextAnimation>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            A passionate engineer and storyteller sharing insights on technology, creativity, and the
            journey of building meaningful digital experiences.
          </p>
          
          <Cta />
        </div>

        <Stats />
        
        <FeaturedTopics />

        <ExpertisePreview />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mt-20 mb-8">
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
