import React from 'react'

const stats = [
  { value: '150+', label: 'Articles Written', color: 'text-blue-500' },
  { value: '20K+', label: 'Readers Reached', color: 'text-purple-500' },
  { value: '3+', label: 'Years Writing', color: 'text-indigo-500' },
]

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group text-center p-6 bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/20 hover:bg-card/50 transition-all duration-300"
        >
          <div
            className={`text-4xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
          >
            {stat.value}
          </div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats
