import { motion, MotionProps, stagger } from 'motion/react'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/lib/utils'
import React from 'react'
import { LuDatabase, LuFileCode2, LuPalette, LuZap } from 'react-icons/lu'

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

const containerVariants: MotionProps['variants'] = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: stagger(0.25) } },
}

const itemVariants: MotionProps['variants'] = {
  hidden: { scale: 0 },
  visible: (index: number) => ({
    scale: 1,
    transition: { type: 'spring', mass: 3, damping: 20, stiffness: 100, delay: index * 0.25 },
  }),
}

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
          const gradientMap: Record<string, string> = {
            'text-blue-500':
              'group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:via-blue-400/10 group-hover:to-cyan-500/10',
            'text-green-500':
              'group-hover:bg-gradient-to-br group-hover:from-green-500/10 group-hover:via-emerald-400/10 group-hover:to-teal-500/10',
            'text-purple-500':
              'group-hover:bg-gradient-to-br group-hover:from-purple-500/10 group-hover:via-pink-400/10 group-hover:to-fuchsia-500/10',
            'text-yellow-500':
              'group-hover:bg-gradient-to-br group-hover:from-yellow-500/10 group-hover:via-orange-400/10 group-hover:to-amber-500/10',
          }
          const cardGradient =
            gradientMap[item.color] ||
            'group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/5'

          const iconHoverColor: Record<string, string> = {
            'text-blue-500': 'group-hover:text-blue-400',
            'text-green-500': 'group-hover:text-green-400',
            'text-purple-500': 'group-hover:text-purple-400',
            'text-yellow-500': 'group-hover:text-yellow-400',
          }
          const iconHover = iconHoverColor[item.color] || 'group-hover:text-primary'

          const titleHoverColor: Record<string, string> = {
            'text-blue-500': 'group-hover:text-blue-500',
            'text-green-500': 'group-hover:text-green-500',
            'text-purple-500': 'group-hover:text-purple-500',
            'text-yellow-500': 'group-hover:text-yellow-500',
          }
          const titleHover = titleHoverColor[item.color] || 'group-hover:text-primary'

          const iconBgGradient: Record<string, string> = {
            'text-blue-500':
              'group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:via-blue-400/20 group-hover:to-cyan-500/20',
            'text-green-500':
              'group-hover:bg-gradient-to-br group-hover:from-green-500/30 group-hover:via-emerald-400/20 group-hover:to-teal-500/20',
            'text-purple-500':
              'group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:via-pink-400/20 group-hover:to-fuchsia-500/20',
            'text-yellow-500':
              'group-hover:bg-gradient-to-br group-hover:from-yellow-500/30 group-hover:via-orange-400/20 group-hover:to-amber-500/20',
          }
          const iconBg =
            iconBgGradient[item.color] ||
            'group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20'

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
                className={`group bg-card/30 border-border hover:border-primary/30 relative overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${cardGradient}`}
              >
                <div
                  className={`inline-flex rounded-xl p-3 ${item.bgColor} mb-4 group-hover:scale-110 ${iconBg} transition-all duration-300`}
                >
                  <Icon
                    className={`h-6 w-6 ${item.color} ${iconHover} transition-colors duration-300`}
                  />
                </div>
                <Typography
                  as="h3"
                  variant="h3"
                  weight="semibold"
                  color="secondary"
                  className={cn(titleHover, 'mb-5')}
                >
                  {item.title}
                </Typography>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, skillIndex) => {
                    const gradientMap: Record<string, string> = {
                      'text-blue-500':
                        'from-blue-500/20 via-blue-400/20 to-cyan-500/20 hover:from-blue-500/30 hover:via-blue-400/30 hover:to-cyan-500/30 border-blue-500/30',
                      'text-green-500':
                        'from-green-500/20 via-emerald-400/20 to-teal-500/20 hover:from-green-500/30 hover:via-emerald-400/30 hover:to-teal-500/30 border-green-500/30',
                      'text-purple-500':
                        'from-purple-500/20 via-pink-400/20 to-fuchsia-500/20 hover:from-purple-500/30 hover:via-pink-400/30 hover:to-fuchsia-500/30 border-purple-500/30',
                      'text-yellow-500':
                        'from-yellow-500/20 via-orange-400/20 to-amber-500/20 hover:from-yellow-500/30 hover:via-orange-400/30 hover:to-amber-500/30 border-yellow-500/30',
                    }
                    const gradient =
                      gradientMap[item.color] || 'from-primary/20 to-primary/30 border-primary/30'

                    return (
                      <div
                        key={skillIndex}
                        className={`group/skill relative rounded-xl bg-gradient-to-br px-4 py-2.5 ${gradient} overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-current/20`}
                      >
                        <Typography
                          as="span"
                          size="xxs"
                          color="inherit"
                          weight="semibold"
                          className="text-foreground/90 group-hover/skill:text-foreground relative z-10 transition-colors"
                        >
                          {skill}
                        </Typography>
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} -z-10 opacity-0 blur-sm transition-opacity duration-300 group-hover/skill:opacity-100`}
                        />
                        <div className="absolute inset-0 overflow-hidden rounded-xl">
                          <div className="absolute top-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover/skill:translate-x-full" />
                        </div>
                      </div>
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
