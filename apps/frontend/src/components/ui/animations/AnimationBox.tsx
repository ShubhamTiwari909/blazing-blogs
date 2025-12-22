'use client'

import { motion, MotionProps } from 'motion/react'
import { cn } from '@/lib/utils'
import React from 'react'
import type { AnimationBoxProps } from './types'

const defaultInitial: MotionProps['initial'] = { opacity: 0, scale: 0 }
const defaultAnimate: MotionProps['animate'] = { opacity: [0.75, 1], scale: [1.25, 1] }
const defaultTransition: MotionProps['transition'] = {
  duration: 0.5,
  ease: 'easeInOut',
  times: [0, 1],
  type: 'spring',
  mass: 4,
  damping: 10,
  stiffness: 100,
}

const AnimationBox = ({
  children,
  className,
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
  ...props
}: AnimationBoxProps) => {
  return (
    <motion.div
      {...props}
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default AnimationBox
