import SubscribeForm from '@/components/subscribe/Subscribe'
import DynamicBackground from '@/components/home/DynamicBackground'
import { Mail, Sparkles } from 'lucide-react'
import React from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const isSubscribed = async (email: string) => {
  const res = await fetch(`${process.env.SITE_URL}/api/subscribe?email=${email}`)
  const data = await res.json()
  return data.docs[0]
}

const page = async () => {
  const session = await auth()
  const email = session?.user?.email
  if (!email) {
    redirect('/')
  }
  const subcribed = await isSubscribed(email)
  console.log(subcribed?.email)
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-12 lg:py-20">
      <DynamicBackground />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <div className="relative p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Stay in the Loop
            </h1>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-xl mx-auto leading-relaxed font-light">
            Subscribe to get the latest articles, insights, and updates delivered straight to your
            inbox.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Join a community of passionate developers and tech enthusiasts
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 p-8 md:p-12 shadow-xl">
          <SubscribeForm email={email} existingSubscriber={subcribed?.email} activeSubscriber={subcribed?.isActive || false} name={session?.user?.name || ''} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
