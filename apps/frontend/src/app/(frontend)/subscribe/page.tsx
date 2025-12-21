import AnimationBox from '@/components/ui/text-animation/AnimationBox'
import DynamicBackground from '@/components/ui/DynamicBackground'
import SubscribeForm from '@/components/subscribe/Subscribe'
import { Typography } from '@/components/atoms/typography'
import { LuMail, LuSparkles } from 'react-icons/lu'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import React from 'react'
import { METADATA } from './metadata'

const isSubscribed = async (email: string) => {
  const res = await fetch(`${process.env.SITE_URL}/api/subscribe?email=${email}`)
  const data = await res.json()
  return data.docs[0]
}

export const metadata = METADATA

const page = async () => {
  const session = await auth()
  const email = session?.user?.email
  if (!email) {
    redirect('/')
  }
  const subcribed = await isSubscribed(email)

  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden py-12 lg:py-20">
      <DynamicBackground />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <AnimationBox className="relative mb-6 inline-flex items-center justify-center">
            <div className="bg-primary/20 absolute inset-0 rounded-full blur-2xl" />
            <div className="bg-card/50 border-border/50 relative rounded-2xl border p-4 backdrop-blur-sm">
              <LuMail className="text-primary h-8 w-8" />
            </div>
          </AnimationBox>

          <AnimationBox className="mb-4 flex items-center justify-center gap-2">
            <LuSparkles className="text-primary h-5 w-5" />
            <Typography
              as="h1"
              variant="h1"
              size="4xl"
              weight="bold"
              className="text-foreground text-center"
            >
              Stay in the Loop
            </Typography>
            <LuSparkles className="text-primary h-5 w-5" />
          </AnimationBox>

          <AnimationBox>
            <Typography
              as="p"
              color="muted"
              size="lg"
              weight="light"
              className="mx-auto mb-2 max-w-xl text-center"
            >
              Subscribe to get the latest articles, insights, and updates delivered straight to your
              inbox.
            </Typography>
            <Typography
              as="p"
              color="inherit"
              size="xs"
              weight="light"
              className="text-muted-foreground/80 text-center"
            >
              Join a community of passionate developers and tech enthusiasts
            </Typography>
          </AnimationBox>
        </div>

        <div className="bg-card/30 border-border/50 rounded-2xl border p-8 shadow-xl backdrop-blur-md md:p-12">
          <SubscribeForm
            email={email}
            existingSubscriber={subcribed?.email}
            activeSubscriber={subcribed?.isActive || false}
            name={session?.user?.name || ''}
          />
        </div>

        <div className="mt-8 text-center">
          <Typography as="p" size="xxs" color="muted" className="text-center">
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default page
