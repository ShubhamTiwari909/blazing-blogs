'use client'
import { useMutation } from '@tanstack/react-query'
import type { SubscribeFormProps } from './types'
import { useState } from 'react'

export const useSubscribe = ({
  email,
  activeSubscriber,
  existingSubscriber,
  name,
}: SubscribeFormProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [isSubscribed, setIsSubscribed] = useState(activeSubscriber)
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(!existingSubscriber)

  const { mutate: sendEmail, isPending: isSendingEmail } = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })
      return res.json()
    },
    onSuccess: () => {
      setStatus('success')
    },
    onError: () => {
      setStatus('error')
    },
  })

  const { mutate: subscribeToNewsletter, isPending: isSubscribingToNewsletter } = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })
      return res.json()
    },
    onSuccess: () => {
      setStatus('success')
      setIsSubscribed(true)
      if (isFirstTimeUser) {
        sendEmail()
        setIsFirstTimeUser(false)
      }
    },
    onError: () => {
      setStatus('error')
    },
  })

  const { mutate: unsubscribeFromNewsletter, isPending: isUnsubscribingFromNewsletter } =
    useMutation({
      mutationFn: async () => {
        const res = await fetch('/api/unsubscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
        return res.json()
      },
      onSuccess: () => {
        setStatus('success')
        setIsSubscribed(false)
      },
      onError: () => {
        setStatus('error')
      },
    })

  return {
    status,
    isSubscribed,
    isFirstTimeUser,
    subscribeToNewsletter,
    unsubscribeFromNewsletter,
    isSendingEmail,
    isSubscribingToNewsletter,
    isUnsubscribingFromNewsletter,
  }
}
