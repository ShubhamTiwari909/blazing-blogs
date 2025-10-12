'use client'
import { Switch } from '@/components/ui/switch'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import React from 'react'

const DarkModeToggle = () => {
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode)
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode" className='scale-140 cursor-pointer [&_span[data-state=checked]]:bg-[url("/moon.svg")] [&_span[data-state=unchecked]]:bg-[url("/sun.svg")]' checked={darkMode} onCheckedChange={toggleDarkMode} />
    </div>
  )
}

export default DarkModeToggle
