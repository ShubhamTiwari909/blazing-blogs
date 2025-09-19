import { Award, Users, Zap } from 'lucide-react'
import React from 'react'

const Values = () => {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 mb-20">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
        My Values & Approach
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Quality First</h3>
          <p className="text-slate-600 dark:text-slate-300">
            I believe in writing clean, maintainable code that stands the test of time.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">User-Centric</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Every decision I make is guided by how it will impact the end user experience.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Innovation</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Always exploring new technologies and approaches to solve problems better.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Values
