import { DefaultAnimationWrapper } from '@/components/ui/text-animation/AnimationWrappers'
import React from 'react'

const Outro = () => {
  return (
    <DefaultAnimationWrapper className="mt-16 text-center">
      <div className="rounded-2xl border border-white/20 bg-white/50 p-8 backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/50">
        <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200">
          Let&apos;s Build Something Amazing Together
        </h3>
        <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
          Whether you have a project in mind, want to collaborate, or just want to chat about
          technology and innovation, I&apos;m always excited to connect with fellow creators and
          developers.
        </p>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default Outro
