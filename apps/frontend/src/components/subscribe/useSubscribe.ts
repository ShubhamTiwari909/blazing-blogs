'use client'
import { useMutation } from '@tanstack/react-query'
import type { SubscribeFormProps } from './types'
import posthog from 'posthog-js'
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

      // Capture newsletter subscription event
      posthog.capture('newsletter_subscribed', {
        email,
        name,
        is_first_time_user: isFirstTimeUser,
      })

      if (isFirstTimeUser) {
        sendEmail()
        setIsFirstTimeUser(false)
      }
    },
    onError: (error) => {
      setStatus('error')
      posthog.captureException(error)
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

        // Capture newsletter unsubscription event
        posthog.capture('newsletter_unsubscribed', {
          email,
        })
      },
      onError: (error) => {
        setStatus('error')
        posthog.captureException(error)
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
