'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { ChildrenProps } from '@/components/ui/types'
import { Button } from '@/components/ui/Button'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Collaborators', href: '/collaborators' },
  { name: 'Subscribe', href: '/subscribe' },
]

const Navbar = ({ children }: ChildrenProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/brand-logo.png" alt="Blazing Blogs" width={130} height={130} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
            {children}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer text-slate-600 hover:text-slate-900 focus:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg border border-slate-200 bg-white/95 px-2 pt-2 pb-3 shadow-lg backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {session ? (
                  <div className="space-y-2">
                    <div className="text-center font-medium text-slate-600">
                      Welcome, {session.user?.name}
                    </div>
                    <Button
                      onClick={() => signOut()}
                      className="w-full cursor-pointer rounded-lg bg-red-500 px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-red-600"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => signIn('google')}
                    className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:from-indigo-600 hover:to-purple-700"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
