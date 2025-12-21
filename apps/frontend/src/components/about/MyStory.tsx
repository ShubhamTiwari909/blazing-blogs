import { DefaultAnimationWrapper } from '@/components/ui/text-animation/AnimationWrappers'
import { Typography } from '@/components/atoms/typography'
import { LuCoffee, LuHeart } from 'react-icons/lu'

const MyStory = () => {
  return (
    <DefaultAnimationWrapper className="flex flex-col justify-between gap-5 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70">
      <div>
        <Typography
          as="h2"
          variant="h2"
          size="2xl"
          weight="bold"
          className="mb-6 flex items-center text-center"
        >
          <LuHeart className="mr-3 h-8 w-8 text-red-500" />
          My Story
        </Typography>
        <div className="space-y-6 leading-relaxed text-slate-600 dark:text-slate-300">
          <Typography as="p" size="xs" color="secondary">
            Hello! I&apos;m{' '}
            <Typography as="span" size="xs" color="secondary" weight="medium">
              Shubham Tiwari
            </Typography>
            , a passionate full-stack developer based in India. My journey into the world of
            programming began with curiosity and has evolved into a deep love for creating digital
            solutions.
          </Typography>
          <Typography as="p" size="xs" color="secondary">
            I specialize in modern web technologies, particularly React, Next.js, and Node.js. What
            drives me is the opportunity to turn complex problems into elegant, user-friendly
            applications that make a real impact.
          </Typography>
          <Typography as="p" size="xs" color="secondary">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community. I believe in
            continuous learning and the power of collaboration.
          </Typography>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
        <LuCoffee className="h-5 w-5" />
        <Typography as="span" size="xxs" color="inherit" weight="medium" className="text-sm">
          Fueled by coffee and curiosity
        </Typography>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default MyStory
