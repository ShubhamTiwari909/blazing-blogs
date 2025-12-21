import { DefaultAnimationWrapper } from '@/components/ui/text-animation/AnimationWrappers'
import React from 'react'
import { Typography } from '@/components/atoms/typography'

const Outro = () => {
  return (
    <DefaultAnimationWrapper className="mt-16 text-center">
      <div className="rounded-2xl border border-white/20 bg-white/50 p-8 backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/50">
        <Typography as='h3' variant="h3" weight="semibold" color="secondary" className="mb-4 text-center">
          Let&apos;s Build Something Amazing Together
        </Typography>
        <Typography as='p' size="sm" color="secondary" className="mx-auto max-w-2xl text-center">
          Whether you have a project in mind, want to collaborate, or just want to chat about
          technology and innovation, I&apos;m always excited to connect with fellow creators and
          developers.
        </Typography>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default Outro
