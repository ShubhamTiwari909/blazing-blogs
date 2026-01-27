import SubscribeForm from './SubscribeForm'
import { Session } from 'next-auth'

const isSubscribed = async (email: string) => {
  const res = await fetch(`${process.env.SITE_URL}/api/subscribe?email=${email}`)
  const data = await res.json()
  return data.docs[0]
}

const SubscribeFormWrapper = async ({ email, session }: { email: string; session: Session }) => {
  const subcribed = await isSubscribed(email)
  return (
    <div className="bg-card/30 border-border/50 rounded-2xl border p-8 shadow-xl backdrop-blur-md md:p-12">
      <SubscribeForm
        email={email}
        existingSubscriber={subcribed?.email}
        activeSubscriber={subcribed?.isActive || false}
        name={session?.user?.name || ''}
      />
    </div>
  )
}

export default SubscribeFormWrapper
