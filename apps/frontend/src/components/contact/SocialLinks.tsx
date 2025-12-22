import { DefaultAnimationWrapper } from '@/components/ui/animations/AnimationWrappers'
import { LuExternalLink, LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'
import { Typography } from '@/components/atoms/typography'
import React from 'react'

const contactInfo = {
  social: {
    instagram: 'https://www.instagram.com/supremacism__shubh/',
    linkedin: 'https://www.linkedin.com/in/shubham-tiwari-b7544b193/',
    github: 'https://github.com/ShubhamTiwari909',
    devto: 'https://dev.to/shubhamtiwari909',
  },
}
const SocialLinks = () => {
  return (
    <DefaultAnimationWrapper className="rounded-3xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-sm md:p-8 dark:border-slate-700/20 dark:bg-slate-800/70">
      <Typography as="h2" variant="h2" size="xl" weight="bold" color="secondary" className="mb-6">
        Follow Me
      </Typography>

      <div className="grid grid-cols-2 gap-4">
        {/* Instagram */}
        <a
          href={contactInfo.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 p-4 transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
        >
          <LuInstagram className="h-6 w-6 text-white" />
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            weight="medium"
            className="font-medium text-white"
          >
            Instagram
          </Typography>
        </a>

        {/* LinkedIn */}
        <a
          href={contactInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
        >
          <LuLinkedin className="h-6 w-6 text-white" />
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            weight="medium"
            className="font-medium text-white"
          >
            LinkedIn
          </Typography>
        </a>

        {/* GitHub */}
        <a
          href={contactInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:scale-105 hover:from-gray-900 hover:to-black hover:shadow-lg"
        >
          <LuGithub className="h-6 w-6 text-white" />
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            weight="medium"
            className="font-medium text-white"
          >
            GitHub
          </Typography>
        </a>

        {/* Dev.to */}
        <a
          href={contactInfo.social.devto}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-4 transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-lg"
        >
          <LuExternalLink className="h-6 w-6 text-white" />
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            weight="medium"
            className="font-medium text-white"
          >
            Dev.to
          </Typography>
        </a>
      </div>
    </DefaultAnimationWrapper>
  )
}

export default SocialLinks
