import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <div className="text-center">
      <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Let&apos;s Create Something Amazing Together
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          I&apos;m always excited to work on new projects, collaborate with talented people, and
          contribute to meaningful solutions. Whether you have a project in mind or just want to
          chat about technology, I&apos;d love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            Get In Touch
          </a>
          <Link
            href="/blogs"
            className="bg-white/70 dark:bg-slate-700/70 hover:bg-white/90 dark:hover:bg-slate-600/70 text-slate-800 dark:text-slate-200 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
