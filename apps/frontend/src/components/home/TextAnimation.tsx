'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { cn } from '@/lib/utils'
import type { TextAnimationProps } from './types'

gsap.registerPlugin(useGSAP) // register the hook to avoid React version discrepancies

const TextAnimation = ({
  tag,
  children,
  className,
}: TextAnimationProps) => {
  const container = useRef(null)
  const Tag = tag
  useGSAP(() => {
    const splitText = new SplitText('.text-animation', { type: 'chars, words' })
    splitText.words.forEach((word) => {
      word.classList.add('text-slate-800')
    })
    gsap.from(splitText.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'expo.inOut',
    })
  }, [])
  return (
    <Tag ref={container} className={cn(className, 'text-animation')}>
      {children}
    </Tag>
  )
}

export default TextAnimation
