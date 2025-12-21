import React from 'react'
import { Typography } from '@/components/atoms/typography'

const Header = () => {
  return (
    <div className="mb-10 text-center">
      <Typography as="h1" variant="h1" size="4xl" weight="bold" color="inherit" className="mb-2 text-center">
        System Health Check
      </Typography>
      <Typography as='p' size="sm" color="secondary" className="mt-2 text-center">
        Monitor the status of your database and static pages
      </Typography>
    </div>
  )
}

export default Header
