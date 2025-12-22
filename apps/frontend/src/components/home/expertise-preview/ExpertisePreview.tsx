"use client"
import { LuDatabase, LuFileCode2, LuPalette, LuZap } from 'react-icons/lu'
import { motion } from 'motion/react'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/lib/utils'
import React from 'react'
import { cardStyles, skillStyles } from './styles'
import Skill from './Skill'
import { containerVariants, itemVariants } from './animation'

const expertise = [
  {
    icon: LuFileCode2,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SCSS', 'React', 'Next.js'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: LuDatabase,
    title: 'Backend',
    skills: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: LuPalette,
    title: 'Design',
    skills: ['UI/UX', 'Figma', 'Canva'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: LuZap,
    title: 'Tools',
    skills: [
      'Git',
      'Testing',
      'Performance',
      'Payload CMS',
      'UploadThing',
      'Vercel',
      'Playwright',
      'Vitest',
    ],
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
]

const ExpertisePreview = () => {
  return (
    <div className="mt-20">
      <Typography
        as="h2"
        variant="h2"
        size="2xl"
        weight="bold"
        color="primary"
        className="mb-8 text-center"
      >
        What I Do
      </Typography>
      <motion.div
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4"
      >
        {expertise.map((item, index) => {
          const Icon = item.icon
          const { cardGradient, iconHover, titleHover, iconBg } = cardStyles({ color: item.color })
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={'hidden'}
              whileInView={'visible'}
              viewport={{ once: true }}
              custom={index}
            >
              <div
                className={cn('group bg-card/30 border-border hover:border-primary/30 relative overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg', cardGradient)}
              >
                <div
                  className={cn('inline-flex rounded-xl p-3 mb-4 group-hover:scale-110 transition-all duration-300', iconBg, item.bgColor)}
                >
                  <Icon
                    className={cn('h-6 w-6 transition-colors duration-300', item.color, iconHover)}
                  />
                </div>
                <Typography
                  as="h3"
                  variant="h3"
                  weight="semibold"
                  color="secondary"
                  className={cn('mb-5', titleHover)}
                >
                  {item.title}
                </Typography>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, skillIndex) => {
                    const { gradient } = skillStyles({ color: item.color })
                      return (
                        <Skill key={skillIndex} skill={skill} gradient={gradient} />
                      )
                  })}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ExpertisePreview
