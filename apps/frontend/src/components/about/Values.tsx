import { DefaultAnimationWrapper } from '../ui/text-animation/AnimationWrappers'
import { Award, Users, Zap } from 'lucide-react'
import React from 'react'
import { Typography } from '@/components/atoms/typography'

const Values = () => {
  return (
    <DefaultAnimationWrapper className="mb-20 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70">
      <Typography as="h2" variant="h2" size="2xl" weight="bold" className="mb-8 text-center">
        My Values & Approach
      </Typography>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <Typography as='h3' variant="h3" size="base" weight="semibold" color="secondary" className="text-center">Quality First</Typography>
          <Typography as='p' size="xs" color="secondary" className="text-center">
            I believe in writing clean, maintainable code that stands the test of time.
          </Typography>
        </div>
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <Typography as='h3' variant="h3" size="base" weight="semibold" color="secondary" className="text-center">User-Centric</Typography>
          <Typography as='p' size="xs" color="secondary" className="text-center">
            Every decision I make is guided by how it will impact the end user experience.
          </Typography>
        </div>
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <Typography as='h3' variant="h3" size="base" weight="semibold" color="secondary" className="text-center">Innovation</Typography>
          <Typography as='p' size="xs" color="secondary" className="text-center">
            Always exploring new technologies and approaches to solve problems better.
          </Typography>
        </div>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default Values
