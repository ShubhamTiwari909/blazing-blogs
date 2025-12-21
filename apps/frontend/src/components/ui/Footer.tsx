import { Mail, MapPin, Phone, Github, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Typography } from '../atoms/typography'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Collaborators', href: '/collaborators' },
  { name: 'Subscribe', href: '/subscribe' },
  { name: 'Health Check', href: '/healthcheck' },
]

const contactInfo = {
  email: 'shubhmtiwri00@gmail.com',
  phone: '+91 9627253516',
  location: 'India',
}

const socialLinks = {
  instagram: 'https://www.instagram.com/supremacism__shubh/',
  linkedin: 'https://www.linkedin.com/in/shubham-tiwari-b7544b193/',
  github: 'https://github.com/ShubhamTiwari909',
  devto: 'https://dev.to/shubhamtiwari909',
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Typography as='p' size="base" color="white" weight="bold">B</Typography>
              </div>
              <Typography as='p' size="base" color="white" weight="bold" className="bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                Blazing Blog
              </Typography>
            </Link>
            <Typography as='p' size="xxs" color="inherit" weight="medium" className="mb-6 text-slate-400">
              Passionate full-stack developer crafting digital experiences that make a difference.
            </Typography>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white group-hover:text-indigo-400" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:text-blue-400" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white group-hover:text-pink-400" />
              </a>
              <a
                href={socialLinks.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
                aria-label="Dev.to"
              >
                <ExternalLink className="h-5 w-5 text-white group-hover:text-indigo-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography as='h3' variant="p" weight="semibold" color="white" className="mb-4">Quick Links</Typography>
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

          {/* Contact Information */}
          <div>
          <Typography as='h3' variant="p" weight="semibold" color="white" className="mb-4">Get In Touch</Typography>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center space-x-3 text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 transition-colors duration-200 group-hover:bg-blue-600/30">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <Typography as='p' size="xxs" color="inherit" weight="medium">{contactInfo.email}</Typography>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="group flex items-center space-x-3 text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 transition-colors duration-200 group-hover:bg-green-600/30">
                    <Phone className="h-4 w-4 text-green-400" />
                  </div>
                  <Typography as='p' size="xxs" color="inherit" weight="medium">{contactInfo.phone}</Typography>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20">
                    <MapPin className="h-4 w-4 text-purple-400" />
                  </div>
                  <Typography as='p' size="xxs" color="inherit" weight="medium">{contactInfo.location}</Typography>
                </div>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <Typography as='h3' variant="p" weight="semibold" color="white" className="mb-4">About</Typography>
            <Typography as='p' size="xxs" color="inherit" className="mb-4 text-slate-400">
              I believe in the power of code to solve real-world problems and create meaningful
              connections.
            </Typography>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-700/50 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <Typography as='p' size="xxs" color="inherit" className="text-center text-sm text-slate-500 md:text-left">
              © {currentYear} Blazing Blog. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
