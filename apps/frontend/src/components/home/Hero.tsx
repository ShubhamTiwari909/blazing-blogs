'use client'

import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import TextAnimation from './TextAnimation'

const Confetti = dynamic(() => import('./Confetti'), { ssr: false })

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background py-12 lg:py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-accent/5 blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting Pill */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-medium text-muted-foreground shadow-sm hover:bg-card/80 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Welcome to my digital space
          </span>
        </div>

        {/* Main Heading */}
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

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          A passionate engineer and storyteller sharing insights on technology, creativity, and the
          journey of building meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link
            href="/blogs"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Read My Stories
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 bg-background border border-input text-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">Get In Touch</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Articles Written', color: 'text-blue-500' },
            { value: '20K+', label: 'Readers Reached', color: 'text-purple-500' },
            { value: '3+', label: 'Years Writing', color: 'text-indigo-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/20 hover:bg-card/50 transition-all duration-300"
            >
              <div
                className={`text-4xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Confetti />
    </section>
  )
}

export default Hero
