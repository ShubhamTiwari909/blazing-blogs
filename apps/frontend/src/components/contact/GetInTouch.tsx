import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className="mb-16 text-center">
      <AnimationBox>
        <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          Get In Touch
        </h1>
      </AnimationBox>
      <AnimationBox>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
          Ready to collaborate, discuss ideas, or just say hello? I&apos;d love to hear from you!
        </p>
      </AnimationBox>
    </div>
  )
}

export default GetInTouch
