'use client'
import { initialSkills, transitionMyStory, animateSkills } from './animation'
import { Typography } from '@/components/atoms/typography'
import { LuTarget } from 'react-icons/lu'
import { motion } from 'motion/react'

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
    <motion.div
      initial={initialSkills}
      whileInView={animateSkills}
      transition={transitionMyStory}
      viewport={{ once: true, margin: '0px 100px' }}
      className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/70"
    >
      <Typography
        as="h2"
        variant="h2"
        size="2xl"
        weight="bold"
        className="mb-6 flex items-center text-center"
      >
        <LuTarget className="mr-3 h-8 w-8 text-blue-500" />
        Skills & Expertise
      </Typography>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-linear-to-r ${skill.gradient} cursor-default rounded-full px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            {/* Content */}
            <div className="relative flex items-center justify-center space-x-2">
              <Typography as="span" size="sm" color="white" weight="medium">
                {skill.icon}
              </Typography>
              <Typography as="span" size="xxs" color="white" weight="medium">
                {skill.name}
              </Typography>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
