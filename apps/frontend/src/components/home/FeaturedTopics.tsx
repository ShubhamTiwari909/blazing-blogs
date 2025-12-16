import { BookOpen, Code, Lightbulb, Rocket, Sparkles } from 'lucide-react'
import React from 'react'

const topics = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern frameworks, best practices, and cutting-edge techniques',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimization strategies and performance tuning insights',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Tech Insights',
    description: 'Thoughts on technology trends and industry perspectives',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BookOpen,
    title: 'Tutorials',
    description: 'Step-by-step guides and practical learning resources',
    color: 'from-green-500 to-emerald-500',
  },
]

const FeaturedTopics = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Explore Topics</h2>
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <div
              key={index}
              className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${topic.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedTopics
