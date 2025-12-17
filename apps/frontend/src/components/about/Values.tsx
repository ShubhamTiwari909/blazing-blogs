import { Award, Users, Zap } from 'lucide-react'
import React from 'react'

const Values = () => {
  return (
    <div className="mb-20 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70">
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-800 dark:text-slate-200">
        My Values & Approach
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Quality First</h3>
          <p className="text-slate-600 dark:text-slate-300">
            I believe in writing clean, maintainable code that stands the test of time.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">User-Centric</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Every decision I make is guided by how it will impact the end user experience.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg">
            <Zap className="h-8 w-8 text-white" />
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
