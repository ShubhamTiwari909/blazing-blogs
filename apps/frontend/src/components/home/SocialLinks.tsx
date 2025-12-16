import { Github, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import React from 'react'

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/ShubhamTiwari909',
    color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubham-tiwari-b7544b193/',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/supremacism__shubh/',
    color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white',
  },
  {
    icon: ExternalLink,
    label: 'Dev.to',
    href: 'https://dev.to/shubhamtiwari909',
    color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
  },
]

const SocialLinks = () => {
  return (
    <div className="mt-16">
      <h3 className="text-lg font-semibold text-foreground text-center mb-6">
        Connect With Me
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground font-medium transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{social.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks
