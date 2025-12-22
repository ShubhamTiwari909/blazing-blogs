'use client'
import { Typography } from '@/components/atoms/typography'
import { LuCircle, LuLoader } from 'react-icons/lu'
import type { SubscribeFormProps } from './types'
import { Button } from '@/components/ui/Button'
import { useSubscribe } from './useSubscribe'

export default function SubscribeForm({
  email,
  activeSubscriber,
  existingSubscriber,
  name,
}: SubscribeFormProps) {
  const {
    status,
    isSubscribed,
    subscribeToNewsletter,
    unsubscribeFromNewsletter,
    isSubscribingToNewsletter,
    isUnsubscribingFromNewsletter,
  } = useSubscribe({
    email,
    activeSubscriber,
    existingSubscriber,
    name,
  })

  return (
    <div className="space-y-6">
      {isSubscribed ? (
        <Button
          type="submit"
          onClick={() => unsubscribeFromNewsletter()}
          disabled={status === 'loading' || !email || isUnsubscribingFromNewsletter}
          className="text-primary-foreground hover:shadow-primary/25 min-h-20 w-full rounded-xl bg-red-800 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-900/90 hover:shadow-lg"
          size="lg"
        >
          Unsubscribe
        </Button>
      ) : (
        <Button
          type="submit"
          onClick={() => subscribeToNewsletter()}
          disabled={status === 'loading' || !email || isSubscribingToNewsletter}
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 min-h-20 w-full rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          size="lg"
        >
          {status === 'loading' ? (
            <>
              <LuLoader className="h-5 w-5 animate-spin" />
              Subscribing...
            </>
          ) : (
            <Typography
              as="p"
              size="xxs"
              color="inherit"
              weight="medium"
              className="text-balance break-words"
            >
              {email && !isSubscribed ? `Subscribe Now with ${email}` : 'Loading...'}
            </Typography>
          )}
        </Button>
      )}

      {status === 'error' && (
        <div className="bg-destructive/10 border-destructive/20 text-destructive animate-in fade-in slide-in-from-top-2 flex items-center gap-2 rounded-xl border p-4">
          <LuCircle className="h-5 w-5 flex-shrink-0" />
          <Typography
            as="p"
            size="xxs"
            color="inherit"
            weight="medium"
            className="text-sm font-medium"
          >
            This email is already subscribed or there was an error. Please try again.
          </Typography>
        </div>
      )}
    </div>
  )
}
