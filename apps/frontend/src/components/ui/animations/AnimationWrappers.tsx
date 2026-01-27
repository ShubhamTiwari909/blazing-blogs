'use client'
import type { CardAnimationWrapperProps, DefaultAnimationProps } from './types'
import { motion, MotionProps, stagger } from 'motion/react'
import { cn } from '@/lib/utils'

const transitionMyStory: MotionProps['transition'] = {
  type: 'spring',
  mass: 2,
  damping: 20,
  stiffness: 80,
}
const initialMyStory: MotionProps['initial'] = { opacity: 0, scale: 0.5 }
const animateMyStory: MotionProps['animate'] = { opacity: 1, scale: 1 }

const cardContainerVariants: MotionProps['variants'] = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: stagger(0.25) } },
}

const cardVariants: MotionProps['variants'] = {
  hidden: { opacity: 0.5, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', mass: 3, damping: 20, stiffness: 80, delay: index * 0.25 },
  }),
}

export const DefaultAnimationWrapper = ({ children, className }: DefaultAnimationProps) => {
  return (
    <motion.div
      initial={initialMyStory}
      whileInView={animateMyStory}
      transition={transitionMyStory}
      viewport={{ once: true, margin: '0px 100px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export const CardContainerAnimationWrapper = ({ children, className }: DefaultAnimationProps) => {
  return (
    <motion.div
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '100px 100px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export const CardAnimationWrapper = ({ children, className, index }: CardAnimationWrapperProps) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
