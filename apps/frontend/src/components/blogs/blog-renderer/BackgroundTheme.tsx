'use client'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import React from 'react'

const BackgroundTheme = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return darkMode ? (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-950 to-gray-950"></div>
    </>
  ) : null
}

export default BackgroundTheme
