import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
      <Link
        href="/blogs"
        className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
      >
        <span className="relative z-10 flex items-center gap-2">
          Read My Stories
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
        className="group px-8 py-4 bg-background border border-input text-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">Get In Touch</span>
      </Link>
    </div>  
  )
}

export default Cta
