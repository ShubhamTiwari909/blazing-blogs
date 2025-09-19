import { Code, Zap, Lightbulb, Users } from 'lucide-react'
import React from 'react'

const achievements = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Full-Stack Developer',
    description: 'Building modern web applications with cutting-edge technologies',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: 'Problem Solver',
    description: 'Passionate about finding elegant solutions to complex challenges',
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: 'Team Collaborator',
    description: 'Love working with diverse teams to create amazing products',
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and improving my craft',
  },
]

const Achievment = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
        What I Bring to the Table
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {achievement.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievment
