import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '../ui/text-animation/AnimationWrappers'
import { Code, Zap, Lightbulb, Users } from 'lucide-react'
import React from 'react'

const achievements = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: 'Full-Stack Developer',
    description: 'Building modern web applications with cutting-edge technologies',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: 'Problem Solver',
    description: 'Passionate about finding elegant solutions to complex challenges',
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: 'Team Collaborator',
    description: 'Love working with diverse teams to create amazing products',
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and improving my craft',
  },
]

const Achievment = () => {
  return (
    <div className="mb-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-800 dark:text-slate-200">
        What I Bring to the Table
      </h2>
      <CardContainerAnimationWrapper className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <CardAnimationWrapper index={index} key={index}>
            <div className="group rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-slate-700/20 dark:bg-slate-800/70">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 transition-all duration-300 group-hover:shadow-lg dark:from-slate-700 dark:to-slate-600">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {achievement.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          </CardAnimationWrapper>
        ))}
      </CardContainerAnimationWrapper>
    </div>
  )
}

export default Achievment
