'use client'

import React from 'react'
import { Button } from '../button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const defaultImageUrl = 'https://570pc5yjce.ufs.sh/f/QUFIlUYDwcG55o5jv8rcMYwvi9PgT6zWx4lsCmZte08HFhU3'

const SigninSignout = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="flex items-center space-x-3">
      <div className="w-20 h-12 bg-gray-200 rounded-full animate-pulse"></div>
    </div>
  }

  return session ? (
    <div className="flex items-center space-x-3">
      <Button
        onClick={() => signOut()}
        className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
      className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    >
      Login
    </Button>
  )
}

export default SigninSignout
