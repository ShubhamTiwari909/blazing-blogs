import { MotionProps } from 'motion/react'

const initialCta: MotionProps['initial'] = { opacity: 0, scale: 0 }
const animateCta: MotionProps['whileInView'] = { opacity: 1, scale: 1 }

const transitionCta: MotionProps['transition'] = {
  type: 'spring',
  mass: 3,
  damping: 10,
  stiffness: 100,
}

export { initialCta, animateCta, transitionCta }
