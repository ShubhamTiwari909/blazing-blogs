import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import { Users } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <AnimationBox className="mb-16 text-center">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
        <Users className="h-10 w-10 text-white" />
      </div>
      <h1 className="mb-4 text-5xl font-bold text-slate-900 dark:text-white">Our Collaborators</h1>
      <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">
        Meet the amazing people who make this project possible
      </p>
    </AnimationBox>
  )
}

export default Header
