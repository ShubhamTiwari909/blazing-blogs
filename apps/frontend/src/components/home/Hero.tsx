import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-35 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-100 rounded-full opacity-25 animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Welcome to my digital space
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="block">Hello, I&apos;m</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Shubham
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          A passionate engineer and storyteller sharing insights on technology, creativity, and the
          journey of building meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/blogs"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Read My Stories
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Get In Touch
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600 font-medium">Articles Written</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">20K+</div>
            <div className="text-gray-600 font-medium">Readers Reached</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
            <div className="text-gray-600 font-medium">Years Writing</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-2000"></div>
    </section>
  )
}

export default Hero
