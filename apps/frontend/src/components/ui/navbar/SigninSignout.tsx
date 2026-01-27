'use client'

import { useAuthSessionStore } from '@/lib/store/useAuthSession'
import { Button } from '@/components/atoms/button/Button'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const defaultImageUrl =
  'https://570pc5yjce.ufs.sh/f/QUFIlUYDwcG55o5jv8rcMYwvi9PgT6zWx4lsCmZte08HFhU3'

const SigninSignout = () => {
  const { sessionClient, status, setSessionClient } = useAuthSessionStore()

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-3">
        <div className="h-12 w-20 animate-pulse rounded-full bg-gray-200"></div>
      </div>
    )
  }

  return sessionClient ? (
    <div className="flex items-center space-x-3">
      <Button
        onClick={() =>
          signOut().then(() => {
            setSessionClient(null)
          })
        }
        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
      >
        Logout
      </Button>
      <Image
        className="rounded-full"
        src={sessionClient.user?.image || defaultImageUrl}
        alt={sessionClient.user?.name || 'User'}
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
