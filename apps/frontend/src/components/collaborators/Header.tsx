import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import { Typography } from '@/components/atoms/typography'
import { LuUsers } from 'react-icons/lu'
import React from 'react'

const Header = () => {
  return (
    <AnimationBox className="mb-16 text-center">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
        <LuUsers className="h-10 w-10 text-white" />
      </div>
      <Typography
        as="h1"
        variant="h1"
        size="4xl"
        weight="bold"
        color="inherit"
        className="mb-4 text-center"
      >
        Our Collaborators
      </Typography>
      <Typography as="p" size="sm" color="secondary" className="mx-auto max-w-2xl text-center">
        Meet the amazing people who make this project possible
      </Typography>
    </AnimationBox>
  )
}

export default Header
