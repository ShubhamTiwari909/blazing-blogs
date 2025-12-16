import React from 'react'
import BackgroundDecoration from '@/components/ui/BackgroundDecoration'
import GetInTouch from '@/components/contact/GetInTouch'
import ContactInformation from '@/components/contact/ContactInformation'
import SocialLinks from '@/components/contact/SocialLinks'
import Outro from '@/components/contact/Outro'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Contact | Blazing Blogs',
  description: 'Contact us for any questions or inquiries',
  alternates: {
    canonical: 'https://blazing-blogs-frontend.vercel.app/contact',
    languages: {
      'x-default': 'https://blazing-blogs-frontend.vercel.app/contact',
    },
  },
  openGraph: {
    title: 'Contact | Blazing Blogs',
    description: 'Contact us for any questions or inquiries',
    url: 'https://blazing-blogs-frontend.vercel.app/contact',
  },
  twitter: {
    title: 'Contact | Blazing Blogs',
    description: 'Contact us for any questions or inquiries',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BackgroundDecoration />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GetInTouch />

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <ContactInformation />
            <SocialLinks />
          </div>
          <Outro />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
