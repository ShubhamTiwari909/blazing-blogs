import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/blogs"
        className="group bg-primary text-primary-foreground hover:shadow-primary/25 relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center gap-2">
          Read My Stories
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </Link>

      <Link
        href="/contact"
        className="group bg-background border-input text-foreground hover:bg-accent hover:text-accent-foreground rounded-full border px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">Get In Touch</span>
      </Link>
    </div>
  )
}

export default Cta
