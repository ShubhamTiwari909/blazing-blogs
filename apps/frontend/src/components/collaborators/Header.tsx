import { Users } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl mb-6">
        <Users className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Collaborators</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Meet the amazing people who make this project possible
      </p>
    </div>
  )
}

export default Header
