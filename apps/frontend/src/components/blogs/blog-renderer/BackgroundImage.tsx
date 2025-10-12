'use client'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import Image from 'next/image'
import React from 'react'

const BackgroundImage = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return darkMode ? (
    <>
      <Image src="/space-bg-1.webp" alt="space-bg" fill className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/70 -z-10"></div>
    </>
  ) : null
}

export default BackgroundImage
