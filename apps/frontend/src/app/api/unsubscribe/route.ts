import { getPostHogClient } from '@/lib/posthog-server'
import { NextResponse } from 'next/server'
import config from '@payload-config'
import { getPayload } from 'payload'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    const posthog = getPostHogClient()

    await payload.update({
      collection: 'subscribers',
      data: { isActive: false },
      where: { email: { equals: email } },
    })

    // Capture server-side unsubscription event
    posthog.capture({
      distinctId: email,
      event: 'subscriber_unsubscribed',
      properties: {
        email,
        source: 'api',
        unsubscribed_at: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error subscribing to newsletter:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
