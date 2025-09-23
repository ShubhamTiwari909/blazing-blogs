import React from 'react'
import { Button } from '../button'
import { auth, signIn, signOut } from '@/lib/auth'
import Image from 'next/image'

/**
 Why We need this component?
 Since the sign in and sign out features are handled by the server, we need to use a form to handle the server action.
 This component will be passed as a child component to the Navbar component which is client component.
 In this way, we can show the login and logout button in the navbar without any flaky behavior.
 If we make this component a client component, then the login button will be shown for a fraction of a second before the logout button is shown.
 Making it a bad User Experience.
 */
const SigninSignout = async () => {
  const session = await auth()
  return session ? (
    <div className="flex items-center space-x-3">
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button
          type="submit"
          className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Logout
        </Button>
      </form>
      <Image
        className="rounded-full"
        src={session.user?.image || ''}
        alt={session.user?.name || ''}
        width={32}
        height={32}
      />
    </div>
  ) : (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <Button
        type="submit"
        className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        Login
      </Button>
    </form>
  )
}

export default SigninSignout
