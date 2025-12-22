import { Typography } from '@/components/atoms/typography'
import { navItems } from './data'
import Link from 'next/link'
import React from 'react'

const QuickLinks = () => {
  return (
    <div>
      <Typography as="h3" variant="p" weight="semibold" color="white" className="mb-4">
        Quick Links
      </Typography>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="group relative inline-block text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickLinks
