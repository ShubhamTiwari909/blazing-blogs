'use client'
import { variants } from './animation'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const stats = [
  { value: '150+', label: 'Articles Written', color: 'text-blue-500' },
  { value: '20K+', label: 'Readers Reached', color: 'text-purple-500' },
  { value: '3+', label: 'Years Writing', color: 'text-indigo-500' },
]

const Stats = () => {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          variants={variants}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
          key={index}
          className="group bg-card/30 border-border hover:border-primary/20 hover:bg-card/50 rounded-2xl border p-6 text-center"
        >
          <div
            className={cn(
              'mb-1 text-4xl font-bold transition-transform duration-300 group-hover:scale-110',
              stat.color,
            )}
          >
            {stat.value}
          </div>
          <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Stats
