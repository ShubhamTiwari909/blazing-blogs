import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '@/components/ui/text-animation/AnimationWrappers'
import { Typography } from '@/components/atoms/typography'
import React from 'react'
import { LuLightbulb, LuCode, LuUsers, LuZap } from 'react-icons/lu'

const achievements = [
  {
    icon: <LuCode className="h-8 w-8 text-blue-500" />,
    title: 'Full-Stack Developer',
    description: 'Building modern web applications with cutting-edge technologies',
  },
  {
    icon: <LuLightbulb className="h-8 w-8 text-yellow-500" />,
    title: 'Problem Solver',
    description: 'Passionate about finding elegant solutions to complex challenges',
  },
  {
    icon: <LuUsers className="h-8 w-8 text-green-500" />,
    title: 'Team Collaborator',
    description: 'Love working with diverse teams to create amazing products',
  },
  {
    icon: <LuZap className="h-8 w-8 text-purple-500" />,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and improving my craft',
  },
]

const Achievment = () => {
  return (
    <div className="mb-20">
      <Typography as="h2" variant="h2" size="4xl" weight="bold" className="mb-12 text-center">
        What I Bring to the Table
      </Typography>
      <CardContainerAnimationWrapper className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <CardAnimationWrapper index={index} key={index}>
            <div className="group rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-slate-700/20 dark:bg-slate-800/70">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 transition-all duration-300 group-hover:shadow-lg dark:from-slate-700 dark:to-slate-600">
                  {achievement.icon}
                </div>
                <Typography
                  as="h3"
                  variant="h3"
                  size="base"
                  weight="semibold"
                  color="secondary"
                  className="text-center"
                >
                  {achievement.title}
                </Typography>
                <Typography as="p" size="xxs" color="secondary" className="text-center">
                  {achievement.description}
                </Typography>
              </div>
            </div>
          </CardAnimationWrapper>
        ))}
      </CardContainerAnimationWrapper>
    </div>
  )
}

export default Achievment
