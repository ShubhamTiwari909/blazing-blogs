import { Target } from 'lucide-react'
import React from 'react'

const skills = [
  { name: 'HTML', gradient: 'from-red-500 to-red-600', icon: '🌐' },
  { name: 'CSS', gradient: 'from-blue-500 to-blue-600', icon: '🎨' },
  { name: 'JavaScript', gradient: 'from-yellow-500 to-yellow-600', icon: '⚡' },
  { name: 'TypeScript', gradient: 'from-blue-600 to-indigo-600', icon: '🔷' },
  { name: 'Tailwind CSS', gradient: 'from-cyan-500 to-blue-500', icon: '💨' },
  { name: 'React', gradient: 'from-cyan-500 to-blue-500', icon: '⚛️' },
  { name: 'Next.js', gradient: 'from-gray-800 to-gray-900', icon: '▲' },
  { name: 'Astro.js', gradient: 'from-purple-500 to-purple-600', icon: '🚀' },
  { name: 'Vue.js', gradient: 'from-green-500 to-emerald-500', icon: '💚' },
  { name: 'Node.js', gradient: 'from-green-600 to-green-700', icon: '🟢' },
  { name: 'MongoDB', gradient: 'from-green-600 to-teal-600', icon: '🍃' },
  { name: 'Express.js', gradient: 'from-gray-600 to-gray-700', icon: '🚂' },
  { name: 'Payload CMS', gradient: 'from-slate-500 to-slate-600', icon: '📦' },
  { name: 'REST API', gradient: 'from-indigo-500 to-indigo-600', icon: '🔗' },
  { name: 'Figma', gradient: 'from-purple-500 to-pink-500', icon: '🎨' },
  { name: 'AI', gradient: 'from-purple-600 to-violet-600', icon: '🤖' },
  { name: 'Testing', gradient: 'from-orange-500 to-red-500', icon: '🧪' },
  { name: 'Performance', gradient: 'from-sky-500 to-blue-500', icon: '🚀' },
]

const Skills = () => {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
        <Target className="w-8 h-8 text-blue-500 mr-3" />
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-gradient-to-r ${skill.gradient} rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}
          >
            {/* Content */}
            <div className="relative flex items-center justify-center space-x-2">
              <span className="text-lg">{skill.icon}</span>
              <span className="text-white font-semibold text-sm tracking-wide">{skill.name}</span>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
