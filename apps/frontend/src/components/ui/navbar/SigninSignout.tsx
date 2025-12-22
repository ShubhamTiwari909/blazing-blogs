'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const defaultImageUrl =
  'https://570pc5yjce.ufs.sh/f/QUFIlUYDwcG55o5jv8rcMYwvi9PgT6zWx4lsCmZte08HFhU3'

const SigninSignout = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-3">
        <div className="h-12 w-20 animate-pulse rounded-full bg-gray-200"></div>
      </div>
    )
  }

  return session ? (
    <div className="flex items-center space-x-3">
      <Button
        onClick={() => signOut()}
        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
      >
        Logout
      </Button>
      <Image
        className="rounded-full"
        src={session.user?.image || defaultImageUrl}
        alt={session.user?.name || 'User'}
        width={32}
        height={32}
      />
    </div>
  ) : (
    <Button
      onClick={() => signIn('google')}
      className="cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg"
    >
      Login
    </Button>
  )
}

export default SigninSignout
