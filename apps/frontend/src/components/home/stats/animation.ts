import { MotionProps } from 'motion/react'

const variants: MotionProps['variants'] = {
  hidden: { scale: 0.5 },
  visible: { scale: 1, transition: { type: 'spring', mass: 3, damping: 20, stiffness: 80 } },
}

export { variants }
