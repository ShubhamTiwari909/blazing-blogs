'use client'
import { useAuthSessionStore } from '@/lib/store/useAuthSession'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { ChildrenProps } from './types'
import posthog from 'posthog-js'

const SessionWrapperClient = ({ children }: ChildrenProps) => {
  const { sessionClient, setSessionClient, setStatus } = useAuthSessionStore()
  const { data: session, status } = useSession()
  useEffect(() => {
    setSessionClient(session)
    setStatus(status)

    // Identify user in PostHog when session is authenticated
    if (status === 'authenticated' && session?.user?.email) {
      posthog.identify(session.user.email, {
        email: session.user.email,
        name: session.user.name,
      })
    } else if (status === 'unauthenticated') {
      posthog.reset()
    }
  }, [sessionClient, setSessionClient, session, status, setStatus])
  return <>{children}</>
}

export default SessionWrapperClient
