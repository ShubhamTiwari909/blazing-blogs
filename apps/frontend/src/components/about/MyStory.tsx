import { DefaultAnimationWrapper } from '../ui/text-animation/AnimationWrappers'
import { Coffee, Heart } from 'lucide-react'

const MyStory = () => {
  return (
    <DefaultAnimationWrapper className="flex flex-col justify-between gap-5 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70">
      <div>
        <h2 className="mb-6 flex items-center text-3xl font-bold text-slate-800 dark:text-slate-200">
          <Heart className="mr-3 h-8 w-8 text-red-500" />
          My Story
        </h2>
        <div className="space-y-6 leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            Hello! I&apos;m{' '}
            <span className="font-semibold text-slate-800 dark:text-slate-200">Shubham Tiwari</span>
            , a passionate full-stack developer based in India. My journey into the world of
            programming began with curiosity and has evolved into a deep love for creating digital
            solutions.
          </p>
          <p>
            I specialize in modern web technologies, particularly React, Next.js, and Node.js. What
            drives me is the opportunity to turn complex problems into elegant, user-friendly
            applications that make a real impact.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community. I believe in
            continuous learning and the power of collaboration.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
        <Coffee className="h-5 w-5" />
        <span className="text-sm">Fueled by coffee and curiosity</span>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default MyStory
