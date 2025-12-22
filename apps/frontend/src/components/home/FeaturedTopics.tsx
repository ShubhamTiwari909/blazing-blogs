import {
  CardAnimationWrapper,
  CardContainerAnimationWrapper,
} from '@/components/ui/animations/AnimationWrappers'
import { LuCode, LuRocket, LuLightbulb, LuBookOpen } from 'react-icons/lu'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/lib/utils'
import React from 'react'

const topics = [
  {
    icon: LuCode,
    title: 'Web Development',
    description: 'Modern frameworks, best practices, and cutting-edge techniques',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LuRocket,
    title: 'Performance',
    description: 'Optimization strategies and performance tuning insights',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: LuLightbulb,
    title: 'Tech Insights',
    description: 'Thoughts on technology trends and industry perspectives',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: LuBookOpen,
    title: 'Tutorials',
    description: 'Step-by-step guides and practical learning resources',
    color: 'from-green-500 to-emerald-500',
  },
]
const FeaturedTopics = () => {
  return (
    <div className="mt-20">
      <div className="mb-8 flex items-center justify-center gap-2">
        <Typography
          as="h2"
          variant="h2"
          size="2xl"
          weight="bold"
          color="primary"
          className="mb-8 text-center"
        >
          Explore Topics
        </Typography>
      </div>
      <CardContainerAnimationWrapper className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <CardAnimationWrapper index={index} key={index}>
              <div className="group bg-card/50 border-border/50 hover:border-primary/30 hover:shadow-primary/10 relative rounded-2xl border p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={cn(
                    'mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 duration-300 group-hover:scale-110',
                    topic.color,
                  )}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <Typography
                  as="h3"
                  variant="h3"
                  size="lg"
                  weight="semibold"
                  color="secondary"
                  className="mb-2"
                >
                  {topic.title}
                </Typography>
                <Typography as="p" size="xxs" color="muted">
                  {topic.description}
                </Typography>
                <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:to-transparent" />
              </div>
            </CardAnimationWrapper>
          )
        })}
      </CardContainerAnimationWrapper>
    </div>
  )
}

export default FeaturedTopics
