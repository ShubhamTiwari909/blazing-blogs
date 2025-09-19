import { ExternalLink } from 'lucide-react'
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
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Follow Me</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Instagram */}
        <a
          href={contactInfo.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram text-white"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="text-white font-medium">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a
          href={contactInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin-icon lucide-linkedin text-white"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="text-white font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href={contactInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github-icon lucide-github text-white"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="text-white font-medium">GitHub</span>
        </a>

        {/* Dev.to */}
        <a
          href={contactInfo.social.devto}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <ExternalLink className="w-6 h-6 text-white" />
          <span className="text-white font-medium">Dev.to</span>
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
