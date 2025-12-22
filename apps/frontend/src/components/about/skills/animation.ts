import { MotionProps } from "motion/react"

const transitionMyStory: MotionProps['transition'] = {
    type: 'spring',
    mass: 2,
    damping: 25,
    stiffness: 200,
}
const initialSkills: MotionProps['initial'] = { opacity: 0, x: "-100%" }
const animateSkills: MotionProps['whileInView'] = { opacity: 1, x: 0 }

export { transitionMyStory, initialSkills, animateSkills }