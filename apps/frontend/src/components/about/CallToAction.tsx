import { DefaultAnimationWrapper } from '@/components/ui/text-animation/AnimationWrappers'
import { Typography } from '@/components/atoms/typography'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <DefaultAnimationWrapper className="text-center">
      <div className="rounded-2xl border border-white/20 bg-white/50 p-8 backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/50">
        <Typography
          as="h3"
          variant="h3"
          size="2xl"
          weight="semibold"
          color="secondary"
          className="mb-4 text-center"
        >
          Let&apos;s Create Something Amazing Together
        </Typography>
        <Typography
          as="p"
          size="xs"
          color="secondary"
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          I&apos;m always excited to work on new projects, collaborate with talented people, and
          contribute to meaningful solutions. Whether you have a project in mind or just want to
          chat about technology, I&apos;d love to hear from you!
        </Typography>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-slate-800"
          >
            Get In Touch
          </a>
          <Link
            href="/blogs"
            className="rounded-xl bg-white/70 px-8 py-3 font-semibold text-slate-800 transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700/70 dark:text-slate-200 dark:hover:bg-slate-600/70 dark:focus:ring-offset-slate-800"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default CallToAction
