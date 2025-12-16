import Link from 'next/link'
import React from 'react'
import { Mail, MapPin, Phone, Github, Instagram, Linkedin, ExternalLink } from 'lucide-react'

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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Blazing Blog
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Passionate full-stack developer crafting digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white group-hover:text-indigo-400" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-pink-400" />
              </a>
              <a
                href={socialLinks.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Dev.to"
              >
                <ExternalLink className="w-5 h-5 text-white group-hover:text-indigo-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 relative group inline-block"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-slate-400">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm">{contactInfo.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I believe in the power of code to solve real-world problems and create meaningful
              connections.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Blazing Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
