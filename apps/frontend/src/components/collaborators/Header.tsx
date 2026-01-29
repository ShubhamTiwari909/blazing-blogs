'use client'
import AnimationBox from '@/components/ui/animations/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import { LuUsers } from 'react-icons/lu'
import { cn } from '@/lib/utils'

const Header = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <AnimationBox className="mb-16 text-center">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r shadow-xl">
        <LuUsers className={cn('h-10 w-10', darkMode ? 'text-gray-100' : 'text-gray-900')} />
      </div>
      <Typography
        as="h1"
        variant="h1"
        size="4xl"
        weight="bold"
        color="inherit"
        className="mb-6 bg-gradient-to-r bg-clip-text text-center text-transparent"
      >
        Our Collaborators
      </Typography>
      <Typography
        as="p"
        size="sm"
        color="secondary"
        className="description mx-auto max-w-2xl text-center"
      >
        Meet the amazing people who make this project possible
      </Typography>
    </AnimationBox>
  )
}

export default Header
