'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { cn } from '@/lib/utils'
gsap.registerPlugin(useGSAP) // register the hook to avoid React version discrepancies

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

const TextAnimation = ({
  tag,
  children,
  className,
}: {
  tag: Tags
  children: React.ReactNode
  className: string
}) => {
  const container = useRef(null)
  const Tag = tag
  useGSAP(() => {
    const splitText = new SplitText('.text-animation', { type: 'chars, words' })
    splitText.words.forEach((word) => {
        word.classList.add("text-slate-800")
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
