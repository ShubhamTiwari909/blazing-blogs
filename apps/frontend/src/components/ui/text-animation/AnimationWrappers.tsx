'use client'
import { motion, MotionProps, stagger } from 'motion/react'
import { cn } from '@/lib/utils'
import React from 'react'

const transitionMyStory: MotionProps['transition'] = {
  type: 'spring',
  mass: 2,
  damping: 20,
  stiffness: 100,
}
const initialMyStory: MotionProps['initial'] = { opacity: 0, scale: 0 }
const animateMyStory: MotionProps['animate'] = { opacity: 1, scale: 1 }

const cardContainerVariants: MotionProps['variants'] = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { delayChildren: stagger(0.25) } },
}

const cardVariants: MotionProps['variants'] = {
  hidden: { opacity: 0, scale: 0 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', mass: 3, damping: 20, stiffness: 100, delay: index * 0.25 },
  }),
}

export const DefaultAnimationWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
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

export const CardContainerAnimationWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
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

export const CardAnimationWrapper = ({
  children,
  className,
  index,
}: {
  children: React.ReactNode
  className?: string
  index: number
}) => {
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
