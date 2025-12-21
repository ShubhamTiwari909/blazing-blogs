'use client'
import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import DynamicBackground from '@/components/ui/DynamicBackground'
import PortfolioIframe from '@/components/about/PortfolioIframe'
import ExpertisePreview from './ExpertisePreview'
import FeaturedTopics from './FeaturedTopics'
import SocialLinks from './SocialLinks'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'
import Stats from './Stats'
import React from 'react'
import Cta from './Cta'
import { Typography } from '@/components/atoms/typography'

const Confetti = dynamic(() => import('./Confetti'), { ssr: false })

const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-12 lg:py-20">
      <DynamicBackground />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              type: 'spring',
              mass: 3,
              damping: 10,
              stiffness: 100,
            }}
            className="mb-8"
          >
            <Typography as='p' size="xxs" color="muted" weight="medium" className="border-border bg-card/50 hover:bg-card/80 inline-flex items-center rounded-full border px-4 py-1.5 shadow-sm backdrop-blur-sm transition-colors">
              <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Welcome to my digital space
            </Typography>
          </motion.div>

          <Typography as="h1" variant="h1" size="6xl" weight="bold" color="inherit" className="mb-8 text-center">
            <AnimationBox className="mb-2 block">Hello, I&apos;m</AnimationBox>
            <AnimationBox className="from-primary to-secondary block bg-gradient-to-r via-purple-500 bg-clip-text pb-2 text-transparent">
              Shubham
            </AnimationBox>
          </Typography>

          <AnimationBox>
            <Typography as='p' size="lg" color="muted" weight="light" className="mx-auto mb-12 max-w-2xl text-center">
              A passionate engineer and storyteller sharing insights on technology, creativity, and
              the journey of building meaningful digital experiences.
            </Typography>
          </AnimationBox>

          <Cta />
        </div>

        <Stats />

        <FeaturedTopics />

        <ExpertisePreview />

        <Typography as="h2" variant="h2" size="2xl" weight="bold" color="primary" className="mt-20 mb-8 text-center">
          My Portfolio
        </Typography>

        <PortfolioIframe />

        <SocialLinks />
      </div>
      <Confetti />
    </section>
  )
}

export default Hero
