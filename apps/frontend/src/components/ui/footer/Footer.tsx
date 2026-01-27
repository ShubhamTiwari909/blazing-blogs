import { Typography } from '@/components/atoms/typography'
import SocialLinks from './SocialLinks'
import ContactInfo from './ContactInfo'
import QuickLinks from './QuickLinks'
import { Suspense } from 'react'
import Link from 'next/link'
import About from './About'

const Footer = async () => {
  return (
    <footer className="border-t border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Typography as="p" size="base" color="white" weight="bold">
                  B
                </Typography>
              </div>
              <Typography
                as="p"
                size="base"
                color="white"
                weight="bold"
                className="bg-gradient-to-r from-white to-slate-300 bg-clip-text"
              >
                Blazing Blog
              </Typography>
            </Link>
            <Typography
              as="p"
              size="xxs"
              color="inherit"
              weight="medium"
              className="mb-6 text-slate-400"
            >
              Passionate full-stack developer crafting digital experiences that make a difference.
            </Typography>
            <SocialLinks />
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <QuickLinks />
          </Suspense>

          <ContactInfo />

          <About />
        </div>

        <div className="mt-8 border-t border-slate-700/50 pt-8">
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            className="text-center text-sm text-slate-500 md:text-left"
          >
            © 2026 Blazing Blog. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Footer
