'use client'
import { useAuthSessionStore } from '@/lib/store/useAuthSession'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { ChildrenProps } from './types'

const SessionWrapperClient = ({ children }: ChildrenProps) => {
  const { sessionClient, setSessionClient, setStatus } = useAuthSessionStore()
  const { data: session, status } = useSession()
  useEffect(() => {
    setSessionClient(session)
    setStatus(status)
  }, [sessionClient, setSessionClient, session, status, setStatus])
  return <>{children}</>
}

export default SessionWrapperClient
