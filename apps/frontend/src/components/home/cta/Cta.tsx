import AnimationBox from '@/components/ui/animations/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import Link from 'next/link'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { animateCta, initialCta, transitionCta } from './animation'

const Cta = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <AnimationBox
        className="flex flex-col"
        initial={initialCta}
        animate={animateCta}
        transition={transitionCta}
      >
        <Link
          href="/blogs"
          className="group bg-primary text-primary-foreground hover:shadow-primary/25 relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Typography
            as="span"
            size="xxs"
            color="inherit"
            weight="medium"
            className="relative z-10 flex items-center gap-2"
          >
            Read My Stories
           <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Typography>
        </Link>
      </AnimationBox>

      <AnimationBox
        initial={initialCta}
        animate={animateCta}
        transition={{ ...transitionCta, delay: 0.25 }}
        className="flex flex-col"
      >
        <Link
          href="/contact"
          className="group bg-background border-input text-foreground hover:bg-accent hover:text-accent-foreground rounded-full border px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5"
        >
          <Typography
            as="span"
            size="xxs"
            color="inherit"
            weight="medium"
            className="flex items-center gap-2"
          >
            Get In Touch
          </Typography>
        </Link>
      </AnimationBox>
    </div>
  )
}

export default Cta
