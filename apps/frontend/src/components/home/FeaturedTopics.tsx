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
      <div className="mb-8 flex items-center justify-center gap-2">
        <Sparkles className="text-primary h-5 w-5" />
        <h2 className="text-foreground text-2xl font-bold md:text-3xl">Explore Topics</h2>
        <Sparkles className="text-primary h-5 w-5" />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <div
              key={index}
              className="group bg-card/50 border-border/50 hover:border-primary/30 hover:shadow-primary/10 relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${topic.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-foreground group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                {topic.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
              <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:to-transparent" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedTopics
