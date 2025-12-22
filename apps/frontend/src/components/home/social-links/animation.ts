import { MotionProps } from "motion/react"

const containerVariants: MotionProps['variants'] = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  }
  
  const itemVariants: MotionProps['variants'] = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotate: -180,
      y: 20,
    },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        mass: 0.8,
        damping: 12,
        stiffness: 170,
        delay: index * 0.1,
      },
    }),
  }

  export { containerVariants, itemVariants }