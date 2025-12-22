import { MotionProps } from "motion/react";

export type DefaultAnimationProps = { children: React.ReactNode; className?: string }
export type AnimationBoxProps = MotionProps & DefaultAnimationProps
export type CardAnimationWrapperProps = DefaultAnimationProps & { index: number }