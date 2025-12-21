import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import React from 'react'

const Intro = () => {
  return (
    <div className="mb-20 text-center">
      <AnimationBox>
        <Typography
          as="h1"
          variant="h1"
          size="5xl"
          weight="bold"
          className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-center text-transparent"
        >
          About Me
        </Typography>
      </AnimationBox>
      <AnimationBox>
        <Typography as="p" size="base" color="secondary" className="mx-auto max-w-3xl text-center">
          Passionate full-stack developer crafting digital experiences that make a difference. I
          believe in the power of code to solve real-world problems and create meaningful
          connections.
        </Typography>
      </AnimationBox>
    </div>
  )
}

export default Intro
