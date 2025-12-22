import { MotionProps, stagger } from "motion/react"

const containerVariants: MotionProps['variants'] = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: stagger(0.25) } },
  }
  
  const itemVariants: MotionProps['variants'] = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut', delay: index * 0.25 },
    }),
  }

  export { containerVariants, itemVariants }