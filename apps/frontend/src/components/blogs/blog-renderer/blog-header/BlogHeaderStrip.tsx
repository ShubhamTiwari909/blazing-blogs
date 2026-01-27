'use client'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import DarkModeToggle from './DarkModeToggle'
import { LuArrowLeft } from 'react-icons/lu'
import CopyLink from './copy-link/CopyLink'
import Link from 'next/link'

const BlogHeaderStrip = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div
      className={`sticky top-16.25 z-50 mx-auto max-w-5xl rounded-br-2xl rounded-bl-2xl border-b border-gray-200 shadow-sm ${darkMode ? 'bg-slate-900 text-gray-50' : 'bg-white text-gray-900'}`}
    >
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/blogs" className="inline-flex items-center transition-colors duration-200">
          <LuArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
        <div className="flex flex-wrap items-center gap-5">
          <CopyLink />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default BlogHeaderStrip
