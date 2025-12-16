'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Loader2, XCircle } from 'lucide-react'

export default function SubscribeForm({
  email,
  activeSubscriber,
  existingSubscriber,
  name,
}: {
  email: string
  activeSubscriber: boolean
  existingSubscriber: string
  name: string
}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [isSubscribed, setIsSubscribed] = useState(activeSubscriber)
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(!existingSubscriber)

  const subscribe = async () => {
    if (!email || !name) return

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })
      if (res.ok) {
        setIsSubscribed(true)
        if (isFirstTimeUser) {
          await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name }),
          })
          setIsFirstTimeUser(false)
        }
      }

      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const unsubscribe = async () => {
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setIsSubscribed(false)
      }
    } catch {
      setStatus('error')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    subscribe()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubscribed ? (
        <Button
          type="submit"
          onClick={unsubscribe}
          disabled={status === 'loading' || !email}
          className="w-full min-h-20 text-base font-semibold rounded-xl bg-red-800 text-primary-foreground hover:bg-red-900/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          size="lg"
        >
          Unsubscribe
        </Button>
      ) : (
        <Button
          type="submit"
          onClick={subscribe}
          disabled={status === 'loading' || !email}
          className="w-full min-h-20 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          size="lg"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Subscribing...
            </>
          ) : (
            <p className="break-words text-balance">
              {email && !isSubscribed ? `Subscribe Now with ${email}` : 'Loading...'}
            </p>
          )}
        </Button>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive animate-in fade-in slide-in-from-top-2">
          <XCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            This email is already subscribed or there was an error. Please try again.
          </p>
        </div>
      )}
    </form>
  )
}
