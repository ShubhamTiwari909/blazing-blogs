import { motion, MotionProps } from 'motion/react'
import React from 'react'

const stats = [
  { value: '150+', label: 'Articles Written', color: 'text-blue-500' },
  { value: '20K+', label: 'Readers Reached', color: 'text-purple-500' },
  { value: '3+', label: 'Years Writing', color: 'text-indigo-500' },
]

const variants: MotionProps['variants'] = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', mass: 3, damping: 20, stiffness: 100 } },
}

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
            className={`text-4xl font-bold ${stat.color} mb-1 transition-transform duration-300 group-hover:scale-110`}
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
