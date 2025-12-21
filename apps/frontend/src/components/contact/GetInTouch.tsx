import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className="mb-16 text-center">
      <AnimationBox>
        <Typography
          as="h1"
          variant="h1"
          size="5xl"
          weight="bold"
          color="inherit"
          className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-center text-transparent"
        >
          Get In Touch
        </Typography>
      </AnimationBox>
      <AnimationBox>
        <Typography as="p" size="lg" color="secondary" className="mx-auto max-w-2xl text-center">
          Ready to collaborate, discuss ideas, or just say hello? I&apos;d love to hear from you!
        </Typography>
      </AnimationBox>
    </div>
  )
}

export default GetInTouch
