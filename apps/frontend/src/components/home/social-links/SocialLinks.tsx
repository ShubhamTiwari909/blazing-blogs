'use client'
import { SiBlogger, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { containerVariants, itemVariants } from './animation'
import { Typography } from '@/components/atoms/typography'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import React from 'react'

const socialLinks = [
  {
    icon: SiGithub,
    label: 'GitHub',
    href: 'https://github.com/ShubhamTiwari909',
    color: 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubham-tiwari-b7544b193/',
    color: 'bg-blue-600 text-white',
  },
  {
    icon: SiInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/supremacism__shubh/',
    color: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white',
  },
  {
    icon: SiBlogger,
    label: 'Dev.to',
    href: 'https://dev.to/shubhamtiwari909',
    color: 'bg-black text-white dark:bg-white dark:text-black',
  },
]

const SocialLinks = () => {
  return (
    <div className="mt-16">
      <Typography
        as="h3"
        variant="h3"
        size="lg"
        weight="semibold"
        color="secondary"
        className="mb-6 text-center"
      >
        Connect With Me
      </Typography>
      <motion.div
        variants={containerVariants}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.div
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group border-border flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-md',
                  social.color,
                )}
              >
                <Icon className="h-4 w-4" />
                <Typography as="p" size="xxs" color="inherit" weight="medium">
                  {social.label}
                </Typography>
              </motion.a>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default SocialLinks
