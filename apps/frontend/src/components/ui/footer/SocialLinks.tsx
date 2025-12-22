import { LuGithub, LuLinkedin, LuInstagram, LuExternalLink } from 'react-icons/lu'
import { socialLinks } from './data'
import React from 'react'

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
        aria-label="GitHub"
      >
        <LuGithub className="h-5 w-5 text-white group-hover:text-indigo-400" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
        aria-label="LinkedIn"
      >
        <LuLinkedin className="h-5 w-5 text-white group-hover:text-blue-400" />
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
        aria-label="Instagram"
      >
        <LuInstagram className="h-5 w-5 text-white group-hover:text-pink-400" />
      </a>
      <a
        href={socialLinks.devto}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-lg"
        aria-label="Dev.to"
      >
        <LuExternalLink className="h-5 w-5 text-white group-hover:text-indigo-400" />
      </a>
    </div>
  )
}

export default SocialLinks
